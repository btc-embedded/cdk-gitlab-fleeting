import { Duration, Names, RemovalPolicy, Stack } from "aws-cdk-lib";
import {
  AutoScalingGroup,
  DefaultResult,
  LifecycleHook,
  LifecycleTransition,
} from "aws-cdk-lib/aws-autoscaling";
import {
  IMachineImage,
  InstanceType,
  ISecurityGroup,
  IVpc,
  KeyPair,
  LaunchTemplate,
  LaunchTemplateProps,
  SecurityGroup,
  SubnetType,
  UserData,
} from "aws-cdk-lib/aws-ec2";
import {
  IRole,
  ManagedPolicy,
  Policy,
  PolicyDocument,
  PolicyStatement,
  Role,
  ServicePrincipal,
} from "aws-cdk-lib/aws-iam";
import { Bucket, IBucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";
import { AutoScalerPlugins, RunnerConfiguration } from "./runner-configuration";

export interface GitlabRunnerProps {
  readonly vpc: IVpc;
  readonly runnerConfig: RunnerConfiguration;
  readonly instanceType: InstanceType;
  readonly machineImage: IMachineImage;
  readonly runnerType: RunnerType;
  readonly launchTemplate?: LaunchTemplateProps;
  readonly userData: UserData;
  readonly cacheBucket?: IBucket;
  readonly waitForUserdatafinish?: boolean; //Currently Linux Only needs to be removed use instance_ready_command	 from gitlab-runner instead
}
export enum RunnerType {
  INSTANCE_LINUX = "InstanceLinux",
  INSTANCE_WINDOWS = "InstanceWindows",
  INSTANCE_DOCKER = "DockerAutoscaler",
}
export class GitlabRunner extends Construct {
  public launchTemplate: LaunchTemplate;
  public autoScalingGroup: AutoScalingGroup;
  public securityGroup: ISecurityGroup;
  public role: IRole;
  private userData: UserData;
  public customAutoScalingGroupName: string;
  public windowsKeyPair: KeyPair | undefined;
  readonly runnerConfig: RunnerConfiguration;
  readonly cacheBucket?: IBucket;

  constructor(scope: Construct, id: string, props: GitlabRunnerProps) {
    super(scope, id);

    if (props.launchTemplate?.securityGroup) {
      this.securityGroup = props.launchTemplate.securityGroup;
    } else {
      this.securityGroup = new SecurityGroup(this, "GitlabRunnerSG", {
        vpc: props.vpc,
        description: "Security group for Gitlab Runner",
        allowAllOutbound: true,
      });
    }
    this.runnerConfig = props.runnerConfig;
    if (props.launchTemplate?.role) {
      this.role = props.launchTemplate.role;
      // Ensure SSM policy is attached to connnect to instances
      this.role.addManagedPolicy(
        ManagedPolicy.fromAwsManagedPolicyName("AmazonSSMManagedInstanceCore"),
      );
    } else {
      this.role = this.defaultRole();
    }
    // Windows specfic settings
    if (props.runnerType === RunnerType.INSTANCE_WINDOWS) {
      this.windowsKeyPair = new KeyPair(this, "WindowsKeyPair", {});
    }
    // Cache Bucket
    if (props.cacheBucket) {
      this.cacheBucket = props.cacheBucket;
      this.cacheBucket.grantReadWrite(this.role);
    } else {
      this.cacheBucket = new Bucket(this, "GitlabRunnerCacheBucket", {
        removalPolicy: RemovalPolicy.DESTROY,
        autoDeleteObjects: true,
      });
      this.cacheBucket.grantReadWrite(this.role);
    }
    this.userData = props.userData; // fix later
    this.launchTemplate = new LaunchTemplate(this, "LaunchTemplate", {
      ...props.launchTemplate,
      instanceType: props.instanceType,
      machineImage: props.machineImage,
      role: this.role,
      securityGroup: this.securityGroup,
      userData: this.userData,
      keyPair: this.windowsKeyPair,
      requireImdsv2: true,
    });
    this.customAutoScalingGroupName =
      `${props.runnerType}-Runner-${props.instanceType.toString().toLowerCase().replace(/\./g, "-")}` +
      Names.uniqueResourceName(this, { maxLength: 4 });
    this.autoScalingGroup = new AutoScalingGroup(this, "AutoScalingGroup", {
      autoScalingGroupName: this.customAutoScalingGroupName,
      vpc: props.vpc,
      launchTemplate: this.launchTemplate,
      desiredCapacity: 0,
      minCapacity: 0,
      maxCapacity: this.runnerConfig.autoscaler.maxInstances,
      cooldown: Duration.seconds(5),
      newInstancesProtectedFromScaleIn: true,
      vpcSubnets: {
        subnetType: SubnetType.PRIVATE_WITH_EGRESS,
      },
    });
    //If cloud init is provided, add lifecycle hook to wait for cloud init to complete before Gitlab Manager can use the Runner
    if (props.waitForUserdatafinish) {
      this.configWaitForUserdatafinish();
    }
  }

  private defaultRole(): IRole {
    return new Role(this, "GitlabRunnerRole", {
      assumedBy: new ServicePrincipal("ec2.amazonaws.com"),
      managedPolicies: [
        ManagedPolicy.fromAwsManagedPolicyName("AmazonSSMManagedInstanceCore"),
      ],
    });
  }
  //This can can be maybe replaced with instance_ready_command from gitlab-runner
  //https://docs.gitlab.com/runner/configuration/advanced-configuration/#the-runnersautoscaler-section
  private configWaitForUserdatafinish(): void {
    new LifecycleHook(this, "UserDataFinished", {
      autoScalingGroup: this.autoScalingGroup,
      lifecycleTransition: LifecycleTransition.INSTANCE_LAUNCHING,
      heartbeatTimeout: Duration.minutes(5),
      lifecycleHookName: "UserDataFinished",
      defaultResult: DefaultResult.ABANDON,
    });
    this.userData.addCommands(
      'export TOKEN=$(curl -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 21600")',
      'export INSTANCEID=$(curl -H "X-aws-ec2-metadata-token: $TOKEN" http://169.254.169.254/latest/meta-data/instance-id)',
      // 'aws autoscaling set-instance-health --instance-id $INSTANCEID --health-status Healthy',
      `aws autoscaling complete-lifecycle-action --lifecycle-action-result CONTINUE --instance-id $INSTANCEID --lifecycle-hook-name UserDataFinished --auto-scaling-group-name ${this.customAutoScalingGroupName}`,
    );
    this.role.attachInlinePolicy(
      new Policy(this, "LifecyclePolicy", {
        document: new PolicyDocument({
          statements: [
            new PolicyStatement({
              actions: [
                "autoscaling:CompleteLifecycleAction",
                "autoscaling:RecordLifecycleActionHeartbeat",
              ],
              resources: [this.autoScalingGroup.autoScalingGroupArn],
            }),
          ],
        }),
      }),
    );
  }
  public get runnerConfiguration(): RunnerConfiguration {
    return {
      ...this.runnerConfig,
      autoscaler: {
        ...this.runnerConfig.autoscaler,
        plugin: AutoScalerPlugins.AWS,
        connectorConfig: {
          ...this.runnerConfig.autoscaler?.connectorConfig,
          keyPath: this.windowsKeyPair
            ? this.windowsKeyPair.keyPairId
            : undefined,
        },
        pluginConfig: {
          ...this.runnerConfig.autoscaler.pluginConfig,
          name: this.customAutoScalingGroupName,
        },
      },
      cache: {
        type: "s3",
        shared:
          this.runnerConfig.cache?.shared !== undefined
            ? this.runnerConfig.cache.shared
            : false,
        s3: {
          serverAddress: "s3.amazonaws.com",
          bucketName: this.cacheBucket
            ? this.cacheBucket.bucketName
            : undefined,
          bucketLocation: Stack.of(this).region,
        },
      },
    };
  }
}
