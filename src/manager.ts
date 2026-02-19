import * as path from "path";
import { Duration, Stack } from "aws-cdk-lib";
import { AutoScalingGroup, Signals } from "aws-cdk-lib/aws-autoscaling";
import {
  CloudFormationInit,
  IMachineImage,
  InitCommand,
  InitConfig,
  InitFile,
  InitPackage,
  InstanceClass,
  InstanceSize,
  InstanceType,
  ISecurityGroup,
  IVpc,
  LaunchTemplate,
  MachineImage,
  Port,
  SecurityGroup,
  UserData,
} from "aws-cdk-lib/aws-ec2";
import {
  IRole,
  ManagedPolicy,
  PolicyDocument,
  Role,
  ServicePrincipal,
} from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";
import { GitlabRunner } from "./gitlab-runner";
import {
  ConfigurationMapper,
  GlobalConfiguration,
} from "./runner-configuration";
import { instanceTypeToAmazonLinuxCpuType } from "./utils/helper";

export interface ManagerProps {
  readonly globalConfiguration: GlobalConfiguration;
  readonly vpc: IVpc;
  readonly instanceType?: InstanceType;
  readonly role?: IRole;
  readonly gitlabRunners: Array<GitlabRunner>;
}

export class Manager extends Construct {
  readonly globalConfiguration: GlobalConfiguration;
  readonly vpc: IVpc;
  readonly securityGroup: ISecurityGroup;
  readonly instanceType: InstanceType;
  readonly maschineImage: IMachineImage;
  readonly runners: Array<GitlabRunner>;
  readonly cloudInitConfig: CloudFormationInit;
  readonly managerRole: IRole;
  readonly launchTemplate: LaunchTemplate;
  constructor(scope: Construct, id: string, props: ManagerProps) {
    super(scope, id);
    this.globalConfiguration = props.globalConfiguration;
    this.vpc = props.vpc;
    this.runners = props.gitlabRunners;
    this.instanceType =
      props.instanceType ??
      InstanceType.of(InstanceClass.T4G, InstanceSize.NANO);
    this.maschineImage = MachineImage.latestAmazonLinux2023({
      cpuType: instanceTypeToAmazonLinuxCpuType(this.instanceType),
    });
    this.securityGroup = new SecurityGroup(this, "ManagerSG", {
      vpc: this.vpc,
      description: "Security group for Gitlab Runner Manager",
      allowAllOutbound: true,
    });
    // allow manager -> runner traffic for SSH and WinRM
    for (const runner of this.runners) {
      // add ingress rules on each runner security group allowing traffic from the manager SG
      runner.securityGroup.addIngressRule(
        this.securityGroup,
        Port.SSH,
        "Allow SSH from manager",
      );
      runner.securityGroup.addIngressRule(
        this.securityGroup,
        Port.tcp(5985),
        "Allow WinRM HTTP from manager",
      );
      runner.securityGroup.addIngressRule(
        this.securityGroup,
        Port.tcp(5986),
        "Allow WinRM HTTPS from manager",
      );
    }
    this.cloudInitConfig = this.createCloudInitConfig();
    this.managerRole = props.role ?? this.createManagerRole(this.runners);
    const userData = UserData.forLinux();

    this.launchTemplate = new LaunchTemplate(
      this,
      "GitlabRunnerManagerLaunchTemplate",
      {
        instanceType: this.instanceType,
        machineImage: this.maschineImage,
        role: this.managerRole,
        securityGroup: this.securityGroup,
        requireImdsv2: true,
        userData: userData,
      },
    );

    new AutoScalingGroup(this, "GitlabRunnerManagerASG", {
      vpc: this.vpc,
      launchTemplate: this.launchTemplate,
      initOptions: {
        ignoreFailures: true,
      },
      init: this.cloudInitConfig,
      minCapacity: 1,
      maxCapacity: 1,
      signals: Signals.waitForCount(1, { timeout: Duration.minutes(15) }),
    });
  }
  createManagerRole(runners: Array<GitlabRunner>): IRole {
    const role: Role = new Role(this, "GitlabRunnerManagerRole", {
      assumedBy: new ServicePrincipal("ec2.amazonaws.com"),
      managedPolicies: [
        ManagedPolicy.fromAwsManagedPolicyName("AmazonSSMManagedInstanceCore"),
      ],
      inlinePolicies: {
        runner: PolicyDocument.fromJson({
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Action: [
                "autoscaling:SetDesiredCapacity",
                "autoscaling:TerminateInstanceInAutoScalingGroup",
              ],
              Resource: runners.map(
                (runner) => runner.autoScalingGroup.autoScalingGroupArn,
              ),
            },
            {
              Effect: "Allow",
              Action: [
                "autoscaling:DescribeAutoScalingGroups",
                "ec2:DescribeInstances",
                "ec2:DescribeSpotInstanceRequests",
              ],
              Resource: "*",
            },
            {
              Effect: "Allow",
              Action: [
                "ec2:GetPasswordData",
                "ec2-instance-connect:SendSSHPublicKey",
              ],
              Resource: `arn:aws:ec2:${Stack.of(this).region}:${Stack.of(this).account}:instance/*`,
              Condition: {
                StringEquals: {
                  // allow instances that are tagged with any of the autoscaling group names for the provided runners
                  "ec2:ResourceTag/aws:autoscaling:groupName": runners.map(
                    (runner) => runner.autoScalingGroup.autoScalingGroupName,
                  ),
                },
              },
            },
          ],
        }),
      },
    });
    runners.forEach((runner) => {
      if (runner.cacheBucket) {
        runner.cacheBucket?.grantReadWrite(role);
      }
    });
    return role;
  }
  createCloudInitConfig(): CloudFormationInit {
    return CloudFormationInit.fromConfigSets({
      configSets: {
        default: ["repos", "packages", "config", "startup"],
      },
      configs: {
        repos: new InitConfig([
          InitCommand.shellCommand(
            'curl -L "https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.rpm.sh" | sudo bash',
          ),
        ]),
        packages: new InitConfig([InitPackage.yum("gitlab-runner")]),
        config: new InitConfig([
          InitFile.fromString(
            "/etc/gitlab-runner/config.toml",
            ConfigurationMapper.generator({
              globalConfiguration: this.globalConfiguration,
              runnersConfiguration: this.runners.map((runner) => {
                return runner.runnerConfiguration;
              }),
            }).toToml(),
            {
              owner: "gitlab-runner",
              group: "gitlab-runner",
              mode: "000600",
            },
          ),
          InitFile.fromAsset(
            "/etc/gitlab-runner/runner-config-helper.sh",
            path.join(__dirname, "../scripts/runner-config-helper.sh"),
            {
              owner: "gitlab-runner",
              group: "gitlab-runner",
              mode: "000700",
            },
          ),
        ]),
        startup: new InitConfig([
          InitCommand.shellCommand(
            "/etc/gitlab-runner/runner-config-helper.sh",
          ),
          InitCommand.shellCommand("gitlab-runner fleeting install"),
          InitCommand.shellCommand("systemctl restart gitlab-runner"),
        ]),
      },
    });
  }
}
