import {
  IMachineImage,
  IVpc,
  InstanceType,
  LaunchTemplateProps,
  MachineImage,
  UserData,
} from "aws-cdk-lib/aws-ec2";
import { IBucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";
import { GitlabRunner, RunnerType } from "./gitlab-runner";
import { Manager } from "./manager";
import {
  AutoScalerPlugins,
  GlobalConfiguration,
  RunnerConfiguration,
} from "./runner-configuration";
import { instanceTypeToAmazonLinuxCpuType } from "./utils/helper";

export interface GitlabAutoScalerProps {
  readonly vpc: IVpc;
  readonly globalConfiguration: GlobalConfiguration;
  readonly runners: Array<GitlabRunnerUserProps>;
}
export interface GitlabRunnerUserProps {
  readonly instanceType: InstanceType;
  readonly runnerType: RunnerType;
  readonly runnerConfig: RunnerConfiguration;
  readonly machineImage?: IMachineImage;
  readonly launchTemplate?: LaunchTemplateProps;
  readonly userData?: UserData;
  readonly cacheBucket?: IBucket;
}

export class GitlabAutoScaler extends Construct {
  readonly manager: Manager;
  readonly runners: Array<GitlabRunner>;
  readonly vpc: IVpc;
  constructor(scope: Construct, id: string, props: GitlabAutoScalerProps) {
    super(scope, id);
    this.runners = [];
    this.vpc = props.vpc;
    for (const runnerProps of props.runners) {
      switch (runnerProps.runnerType) {
        case RunnerType.INSTANCE_WINDOWS:
          this.runners.push(this.defaultInstanceWindowsRunner(runnerProps));
          break;
        case RunnerType.INSTANCE_LINUX:
          this.runners.push(this.defaultInstanceLinuxRunner(runnerProps));
          break;
        case RunnerType.INSTANCE_DOCKER:
          this.runners.push(this.defaultDockerAutoscalerRunner(runnerProps));
          break;
      }
    }
    this.manager = new Manager(this, "GitlabRunnerManager", {
      vpc: props.vpc,
      gitlabRunners: this.runners,
      globalConfiguration: {
        ...this.defaultGlobalConfiguration(),
        ...props.globalConfiguration,
      },
    });
  }

  public defaultInstanceLinuxRunner(
    props: GitlabRunnerUserProps,
  ): GitlabRunner {
    const userdata = UserData.forLinux();
    userdata.addCommands("yum install -y git");
    const gitlabRunner = new GitlabRunner(this, "GitlabRunner", {
      vpc: this.vpc,
      instanceType: props.instanceType,
      launchTemplate: props.launchTemplate,
      runnerType: RunnerType.INSTANCE_LINUX,
      machineImage: MachineImage.latestAmazonLinux2023({
        cpuType: instanceTypeToAmazonLinuxCpuType(props.instanceType),
      }),
      runnerConfig: {
        shell: "bash",
        ...this.addDefaultsToRunnerConfig(props.runnerConfig),
      },
      userData: userdata,
      waitForUserdatafinish: true,
    });
    return gitlabRunner;
  }
  public defaultInstanceWindowsRunner(
    props: GitlabRunnerUserProps,
  ): GitlabRunner {
    const userdata = props?.userData ? props.userData : UserData.forWindows();
    if (!props.machineImage) {
      throw new Error(
        "Windows Runner requires machine image to be specified in runnerConfig",
      );
    }
    userdata.addCommands(`netsh advfirewall firewall add rule name="WinRM-HTTP" dir=in localport=5985 protocol=TCP action=allow \n
    winrm set winrm/config/service/auth '@{Basic="true"}' \n
    winrm set winrm/config/service '@{AllowUnencrypted="true"}'`);
    const gitlabRunner = new GitlabRunner(this, "GitlabRunnerWindows", {
      vpc: this.vpc,
      runnerType: RunnerType.INSTANCE_WINDOWS,
      instanceType: props.instanceType,
      launchTemplate: props.launchTemplate,
      machineImage: props.machineImage,
      userData: userdata,
      runnerConfig: {
        shell: "powershell",
        ...this.addDefaultsToRunnerConfig(props.runnerConfig),
      },
      waitForUserdatafinish: false,
    });
    return gitlabRunner;
  }
  public defaultDockerAutoscalerRunner(
    props: GitlabRunnerUserProps,
  ): GitlabRunner {
    const userdata = UserData.forLinux();
    userdata.addCommands("yum install -y git docker");
    userdata.addCommands("systemctl start docker");
    const gitlabRunner = new GitlabRunner(this, "GitlabRunner", {
      vpc: this.vpc,
      instanceType: props.instanceType,
      runnerType: RunnerType.INSTANCE_DOCKER,
      machineImage: MachineImage.latestAmazonLinux2023({
        cpuType: instanceTypeToAmazonLinuxCpuType(props.instanceType),
      }),
      launchTemplate: props.launchTemplate,
      runnerConfig: {
        ...this.addDefaultsToRunnerConfig(props.runnerConfig),
        executor: "docker-autoscaler",
        docker: {
          image: "docker:28",
        },
        shell: "bash",
      },
      userData: userdata,
      waitForUserdatafinish: true,
    });
    return gitlabRunner;
  }
  public addDefaultsToRunnerConfig(
    userRunnerConfig: RunnerConfiguration | undefined,
  ): RunnerConfiguration {
    return {
      url: "https://gitlab.com",
      limit: 10,
      executor: "instance",
      checkInterval: 10,
      outputLimit: 52428800,
      ...userRunnerConfig,
      docker: {
        tlsVerify: false,
        image: "docker:28",
        privileged: true,
        capAdd: ["CAP_SYS_ADMIN"],
        waitForServicesTimeout: 300,
        disableCache: false,
        volumes: ["/certs/client", "/cache"],
        shmSize: 0,
        ...userRunnerConfig?.docker,
      },
      autoscaler: {
        minRunners: 0,
        maxInstances: 10,
        capacityPerInstance: 1,
        plugin: AutoScalerPlugins.AWS, // default plugin
        ...userRunnerConfig?.autoscaler,
      },
      cache: userRunnerConfig?.cache,
    } as RunnerConfiguration;
  }
  public defaultGlobalConfiguration(): GlobalConfiguration {
    return {
      concurrent: 10,
      checkInterval: 10,
      logFormat: "runner",
      logLevel: "info",
    };
  }
}
