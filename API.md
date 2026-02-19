# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GitlabAutoScaler <a name="GitlabAutoScaler" id="@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler"></a>

#### Initializers <a name="Initializers" id="@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.Initializer"></a>

```typescript
import { GitlabAutoScaler } from '@btc-embedded/cdk-gitlab-fleeting'

new GitlabAutoScaler(scope: Construct, id: string, props: GitlabAutoScalerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.Initializer.parameter.props">props</a></code> | <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScalerProps">GitlabAutoScalerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.Initializer.parameter.props"></a>

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScalerProps">GitlabAutoScalerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.addDefaultsToRunnerConfig">addDefaultsToRunnerConfig</a></code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.defaultDockerAutoscalerRunner">defaultDockerAutoscalerRunner</a></code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.defaultGlobalConfiguration">defaultGlobalConfiguration</a></code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.defaultInstanceLinuxRunner">defaultInstanceLinuxRunner</a></code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.defaultInstanceWindowsRunner">defaultInstanceWindowsRunner</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDefaultsToRunnerConfig` <a name="addDefaultsToRunnerConfig" id="@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.addDefaultsToRunnerConfig"></a>

```typescript
public addDefaultsToRunnerConfig(userRunnerConfig?: RunnerConfiguration): RunnerConfiguration
```

###### `userRunnerConfig`<sup>Optional</sup> <a name="userRunnerConfig" id="@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.addDefaultsToRunnerConfig.parameter.userRunnerConfig"></a>

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration">RunnerConfiguration</a>

---

##### `defaultDockerAutoscalerRunner` <a name="defaultDockerAutoscalerRunner" id="@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.defaultDockerAutoscalerRunner"></a>

```typescript
public defaultDockerAutoscalerRunner(props: GitlabRunnerUserProps): GitlabRunner
```

###### `props`<sup>Required</sup> <a name="props" id="@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.defaultDockerAutoscalerRunner.parameter.props"></a>

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerUserProps">GitlabRunnerUserProps</a>

---

##### `defaultGlobalConfiguration` <a name="defaultGlobalConfiguration" id="@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.defaultGlobalConfiguration"></a>

```typescript
public defaultGlobalConfiguration(): GlobalConfiguration
```

##### `defaultInstanceLinuxRunner` <a name="defaultInstanceLinuxRunner" id="@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.defaultInstanceLinuxRunner"></a>

```typescript
public defaultInstanceLinuxRunner(props: GitlabRunnerUserProps): GitlabRunner
```

###### `props`<sup>Required</sup> <a name="props" id="@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.defaultInstanceLinuxRunner.parameter.props"></a>

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerUserProps">GitlabRunnerUserProps</a>

---

##### `defaultInstanceWindowsRunner` <a name="defaultInstanceWindowsRunner" id="@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.defaultInstanceWindowsRunner"></a>

```typescript
public defaultInstanceWindowsRunner(props: GitlabRunnerUserProps): GitlabRunner
```

###### `props`<sup>Required</sup> <a name="props" id="@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.defaultInstanceWindowsRunner.parameter.props"></a>

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerUserProps">GitlabRunnerUserProps</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.isConstruct"></a>

```typescript
import { GitlabAutoScaler } from '@btc-embedded/cdk-gitlab-fleeting'

GitlabAutoScaler.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.property.manager">manager</a></code> | <code><a href="#@btc-embedded/cdk-gitlab-fleeting.Manager">Manager</a></code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.property.runners">runners</a></code> | <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunner">GitlabRunner</a>[]</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `manager`<sup>Required</sup> <a name="manager" id="@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.property.manager"></a>

```typescript
public readonly manager: Manager;
```

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.Manager">Manager</a>

---

##### `runners`<sup>Required</sup> <a name="runners" id="@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.property.runners"></a>

```typescript
public readonly runners: GitlabRunner[];
```

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunner">GitlabRunner</a>[]

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScaler.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---


### GitlabRunner <a name="GitlabRunner" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunner"></a>

#### Initializers <a name="Initializers" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.Initializer"></a>

```typescript
import { GitlabRunner } from '@btc-embedded/cdk-gitlab-fleeting'

new GitlabRunner(scope: Construct, id: string, props: GitlabRunnerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.Initializer.parameter.props">props</a></code> | <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerProps">GitlabRunnerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.Initializer.parameter.props"></a>

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerProps">GitlabRunnerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.isConstruct"></a>

```typescript
import { GitlabRunner } from '@btc-embedded/cdk-gitlab-fleeting'

GitlabRunner.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.property.runnerConfig">runnerConfig</a></code> | <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration">RunnerConfiguration</a></code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.property.runnerConfiguration">runnerConfiguration</a></code> | <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration">RunnerConfiguration</a></code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.property.cacheBucket">cacheBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.property.autoScalingGroup">autoScalingGroup</a></code> | <code>aws-cdk-lib.aws_autoscaling.AutoScalingGroup</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.property.customAutoScalingGroupName">customAutoScalingGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.property.launchTemplate">launchTemplate</a></code> | <code>aws-cdk-lib.aws_ec2.LaunchTemplate</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.property.windowsKeyPair">windowsKeyPair</a></code> | <code>aws-cdk-lib.aws_ec2.KeyPair</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `runnerConfig`<sup>Required</sup> <a name="runnerConfig" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.property.runnerConfig"></a>

```typescript
public readonly runnerConfig: RunnerConfiguration;
```

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration">RunnerConfiguration</a>

---

##### `runnerConfiguration`<sup>Required</sup> <a name="runnerConfiguration" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.property.runnerConfiguration"></a>

```typescript
public readonly runnerConfiguration: RunnerConfiguration;
```

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration">RunnerConfiguration</a>

---

##### `cacheBucket`<sup>Optional</sup> <a name="cacheBucket" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.property.cacheBucket"></a>

```typescript
public readonly cacheBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `autoScalingGroup`<sup>Required</sup> <a name="autoScalingGroup" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.property.autoScalingGroup"></a>

```typescript
public readonly autoScalingGroup: AutoScalingGroup;
```

- *Type:* aws-cdk-lib.aws_autoscaling.AutoScalingGroup

---

##### `customAutoScalingGroupName`<sup>Required</sup> <a name="customAutoScalingGroupName" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.property.customAutoScalingGroupName"></a>

```typescript
public readonly customAutoScalingGroupName: string;
```

- *Type:* string

---

##### `launchTemplate`<sup>Required</sup> <a name="launchTemplate" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.property.launchTemplate"></a>

```typescript
public readonly launchTemplate: LaunchTemplate;
```

- *Type:* aws-cdk-lib.aws_ec2.LaunchTemplate

---

##### `role`<sup>Required</sup> <a name="role" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---

##### `securityGroup`<sup>Required</sup> <a name="securityGroup" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

---

##### `windowsKeyPair`<sup>Optional</sup> <a name="windowsKeyPair" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunner.property.windowsKeyPair"></a>

```typescript
public readonly windowsKeyPair: KeyPair;
```

- *Type:* aws-cdk-lib.aws_ec2.KeyPair

---


### Manager <a name="Manager" id="@btc-embedded/cdk-gitlab-fleeting.Manager"></a>

#### Initializers <a name="Initializers" id="@btc-embedded/cdk-gitlab-fleeting.Manager.Initializer"></a>

```typescript
import { Manager } from '@btc-embedded/cdk-gitlab-fleeting'

new Manager(scope: Construct, id: string, props: ManagerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.Manager.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.Manager.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.Manager.Initializer.parameter.props">props</a></code> | <code><a href="#@btc-embedded/cdk-gitlab-fleeting.ManagerProps">ManagerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@btc-embedded/cdk-gitlab-fleeting.Manager.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@btc-embedded/cdk-gitlab-fleeting.Manager.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@btc-embedded/cdk-gitlab-fleeting.Manager.Initializer.parameter.props"></a>

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.ManagerProps">ManagerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.Manager.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.Manager.createCloudInitConfig">createCloudInitConfig</a></code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.Manager.createManagerRole">createManagerRole</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@btc-embedded/cdk-gitlab-fleeting.Manager.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `createCloudInitConfig` <a name="createCloudInitConfig" id="@btc-embedded/cdk-gitlab-fleeting.Manager.createCloudInitConfig"></a>

```typescript
public createCloudInitConfig(): CloudFormationInit
```

##### `createManagerRole` <a name="createManagerRole" id="@btc-embedded/cdk-gitlab-fleeting.Manager.createManagerRole"></a>

```typescript
public createManagerRole(runners: GitlabRunner[]): IRole
```

###### `runners`<sup>Required</sup> <a name="runners" id="@btc-embedded/cdk-gitlab-fleeting.Manager.createManagerRole.parameter.runners"></a>

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunner">GitlabRunner</a>[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.Manager.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@btc-embedded/cdk-gitlab-fleeting.Manager.isConstruct"></a>

```typescript
import { Manager } from '@btc-embedded/cdk-gitlab-fleeting'

Manager.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@btc-embedded/cdk-gitlab-fleeting.Manager.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.Manager.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.Manager.property.cloudInitConfig">cloudInitConfig</a></code> | <code>aws-cdk-lib.aws_ec2.CloudFormationInit</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.Manager.property.globalConfiguration">globalConfiguration</a></code> | <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GlobalConfiguration">GlobalConfiguration</a></code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.Manager.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.Manager.property.launchTemplate">launchTemplate</a></code> | <code>aws-cdk-lib.aws_ec2.LaunchTemplate</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.Manager.property.managerRole">managerRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.Manager.property.maschineImage">maschineImage</a></code> | <code>aws-cdk-lib.aws_ec2.IMachineImage</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.Manager.property.runners">runners</a></code> | <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunner">GitlabRunner</a>[]</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.Manager.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.Manager.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@btc-embedded/cdk-gitlab-fleeting.Manager.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cloudInitConfig`<sup>Required</sup> <a name="cloudInitConfig" id="@btc-embedded/cdk-gitlab-fleeting.Manager.property.cloudInitConfig"></a>

```typescript
public readonly cloudInitConfig: CloudFormationInit;
```

- *Type:* aws-cdk-lib.aws_ec2.CloudFormationInit

---

##### `globalConfiguration`<sup>Required</sup> <a name="globalConfiguration" id="@btc-embedded/cdk-gitlab-fleeting.Manager.property.globalConfiguration"></a>

```typescript
public readonly globalConfiguration: GlobalConfiguration;
```

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.GlobalConfiguration">GlobalConfiguration</a>

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@btc-embedded/cdk-gitlab-fleeting.Manager.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType

---

##### `launchTemplate`<sup>Required</sup> <a name="launchTemplate" id="@btc-embedded/cdk-gitlab-fleeting.Manager.property.launchTemplate"></a>

```typescript
public readonly launchTemplate: LaunchTemplate;
```

- *Type:* aws-cdk-lib.aws_ec2.LaunchTemplate

---

##### `managerRole`<sup>Required</sup> <a name="managerRole" id="@btc-embedded/cdk-gitlab-fleeting.Manager.property.managerRole"></a>

```typescript
public readonly managerRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---

##### `maschineImage`<sup>Required</sup> <a name="maschineImage" id="@btc-embedded/cdk-gitlab-fleeting.Manager.property.maschineImage"></a>

```typescript
public readonly maschineImage: IMachineImage;
```

- *Type:* aws-cdk-lib.aws_ec2.IMachineImage

---

##### `runners`<sup>Required</sup> <a name="runners" id="@btc-embedded/cdk-gitlab-fleeting.Manager.property.runners"></a>

```typescript
public readonly runners: GitlabRunner[];
```

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunner">GitlabRunner</a>[]

---

##### `securityGroup`<sup>Required</sup> <a name="securityGroup" id="@btc-embedded/cdk-gitlab-fleeting.Manager.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@btc-embedded/cdk-gitlab-fleeting.Manager.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---


## Structs <a name="Structs" id="Structs"></a>

### AutoscalerConfiguration <a name="AutoscalerConfiguration" id="@btc-embedded/cdk-gitlab-fleeting.AutoscalerConfiguration"></a>

#### Initializer <a name="Initializer" id="@btc-embedded/cdk-gitlab-fleeting.AutoscalerConfiguration.Initializer"></a>

```typescript
import { AutoscalerConfiguration } from '@btc-embedded/cdk-gitlab-fleeting'

const autoscalerConfiguration: AutoscalerConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.AutoscalerConfiguration.property.capacityPerInstance">capacityPerInstance</a></code> | <code>number</code> | Capacity per instance for the autoscaler. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.AutoscalerConfiguration.property.connectorConfig">connectorConfig</a></code> | <code><a href="#@btc-embedded/cdk-gitlab-fleeting.ConnectorConfig">ConnectorConfig</a></code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.AutoscalerConfiguration.property.deleteInstancesOnShutdown">deleteInstancesOnShutdown</a></code> | <code>boolean</code> | Specifies if all provision instances are deleted when GitLab Runner is shutting down. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.AutoscalerConfiguration.property.instanceAcquireTimeout">instanceAcquireTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.AutoscalerConfiguration.property.instanceReadyCommand">instanceReadyCommand</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.AutoscalerConfiguration.property.maxInstances">maxInstances</a></code> | <code>number</code> | The maximum number of instances that are allowed, this is regardless of the instance state (pending, running, deleting) (0 means unlimited). |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.AutoscalerConfiguration.property.maxUseCount">maxUseCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.AutoscalerConfiguration.property.minRunners">minRunners</a></code> | <code>number</code> | Minimum number of runners to keep online. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.AutoscalerConfiguration.property.plugin">plugin</a></code> | <code><a href="#@btc-embedded/cdk-gitlab-fleeting.AutoScalerPlugins">AutoScalerPlugins</a></code> | GitLab fleet plugin for the autoscaler. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.AutoscalerConfiguration.property.pluginConfig">pluginConfig</a></code> | <code><a href="#@btc-embedded/cdk-gitlab-fleeting.PluginConfig">PluginConfig</a></code> | *No description.* |

---

##### `capacityPerInstance`<sup>Optional</sup> <a name="capacityPerInstance" id="@btc-embedded/cdk-gitlab-fleeting.AutoscalerConfiguration.property.capacityPerInstance"></a>

```typescript
public readonly capacityPerInstance: number;
```

- *Type:* number
- *Default:* 1

Capacity per instance for the autoscaler.

---

##### `connectorConfig`<sup>Optional</sup> <a name="connectorConfig" id="@btc-embedded/cdk-gitlab-fleeting.AutoscalerConfiguration.property.connectorConfig"></a>

```typescript
public readonly connectorConfig: ConnectorConfig;
```

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.ConnectorConfig">ConnectorConfig</a>

---

##### `deleteInstancesOnShutdown`<sup>Optional</sup> <a name="deleteInstancesOnShutdown" id="@btc-embedded/cdk-gitlab-fleeting.AutoscalerConfiguration.property.deleteInstancesOnShutdown"></a>

```typescript
public readonly deleteInstancesOnShutdown: boolean;
```

- *Type:* boolean
- *Default:* false

Specifies if all provision instances are deleted when GitLab Runner is shutting down.

---

##### `instanceAcquireTimeout`<sup>Optional</sup> <a name="instanceAcquireTimeout" id="@btc-embedded/cdk-gitlab-fleeting.AutoscalerConfiguration.property.instanceAcquireTimeout"></a>

```typescript
public readonly instanceAcquireTimeout: number;
```

- *Type:* number

---

##### `instanceReadyCommand`<sup>Optional</sup> <a name="instanceReadyCommand" id="@btc-embedded/cdk-gitlab-fleeting.AutoscalerConfiguration.property.instanceReadyCommand"></a>

```typescript
public readonly instanceReadyCommand: string;
```

- *Type:* string

---

##### `maxInstances`<sup>Optional</sup> <a name="maxInstances" id="@btc-embedded/cdk-gitlab-fleeting.AutoscalerConfiguration.property.maxInstances"></a>

```typescript
public readonly maxInstances: number;
```

- *Type:* number
- *Default:* 0

The maximum number of instances that are allowed, this is regardless of the instance state (pending, running, deleting) (0 means unlimited).

---

##### `maxUseCount`<sup>Optional</sup> <a name="maxUseCount" id="@btc-embedded/cdk-gitlab-fleeting.AutoscalerConfiguration.property.maxUseCount"></a>

```typescript
public readonly maxUseCount: number;
```

- *Type:* number

---

##### `minRunners`<sup>Optional</sup> <a name="minRunners" id="@btc-embedded/cdk-gitlab-fleeting.AutoscalerConfiguration.property.minRunners"></a>

```typescript
public readonly minRunners: number;
```

- *Type:* number
- *Default:* 0

Minimum number of runners to keep online.

---

##### `plugin`<sup>Optional</sup> <a name="plugin" id="@btc-embedded/cdk-gitlab-fleeting.AutoscalerConfiguration.property.plugin"></a>

```typescript
public readonly plugin: AutoScalerPlugins;
```

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.AutoScalerPlugins">AutoScalerPlugins</a>
- *Default:* aws

GitLab fleet plugin for the autoscaler.

//  *

---

##### `pluginConfig`<sup>Optional</sup> <a name="pluginConfig" id="@btc-embedded/cdk-gitlab-fleeting.AutoscalerConfiguration.property.pluginConfig"></a>

```typescript
public readonly pluginConfig: PluginConfig;
```

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.PluginConfig">PluginConfig</a>

---

### AutoscalingConfiguration <a name="AutoscalingConfiguration" id="@btc-embedded/cdk-gitlab-fleeting.AutoscalingConfiguration"></a>

> [https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runnersmachineautoscaling-sections](https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runnersmachineautoscaling-sections)

#### Initializer <a name="Initializer" id="@btc-embedded/cdk-gitlab-fleeting.AutoscalingConfiguration.Initializer"></a>

```typescript
import { AutoscalingConfiguration } from '@btc-embedded/cdk-gitlab-fleeting'

const autoscalingConfiguration: AutoscalingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.AutoscalingConfiguration.property.idleCount">idleCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.AutoscalingConfiguration.property.idleTime">idleTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.AutoscalingConfiguration.property.periods">periods</a></code> | <code>string[]</code> | The Periods setting contains an array of string patterns of time periods represented in a cron-style format. https://github.com/gorhill/cronexpr#implementation. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.AutoscalingConfiguration.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |

---

##### `idleCount`<sup>Optional</sup> <a name="idleCount" id="@btc-embedded/cdk-gitlab-fleeting.AutoscalingConfiguration.property.idleCount"></a>

```typescript
public readonly idleCount: number;
```

- *Type:* number

---

##### `idleTime`<sup>Optional</sup> <a name="idleTime" id="@btc-embedded/cdk-gitlab-fleeting.AutoscalingConfiguration.property.idleTime"></a>

```typescript
public readonly idleTime: number;
```

- *Type:* number

---

##### `periods`<sup>Optional</sup> <a name="periods" id="@btc-embedded/cdk-gitlab-fleeting.AutoscalingConfiguration.property.periods"></a>

```typescript
public readonly periods: string[];
```

- *Type:* string[]

The Periods setting contains an array of string patterns of time periods represented in a cron-style format. https://github.com/gorhill/cronexpr#implementation.

[second] [minute] [hour] [day of month] [month] [day of week] [year]

---

*Example*

```typescript
// "* * 7-22 * * mon-fri *"
```


##### `timezone`<sup>Optional</sup> <a name="timezone" id="@btc-embedded/cdk-gitlab-fleeting.AutoscalingConfiguration.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

### CacheConfiguration <a name="CacheConfiguration" id="@btc-embedded/cdk-gitlab-fleeting.CacheConfiguration"></a>

#### Initializer <a name="Initializer" id="@btc-embedded/cdk-gitlab-fleeting.CacheConfiguration.Initializer"></a>

```typescript
import { CacheConfiguration } from '@btc-embedded/cdk-gitlab-fleeting'

const cacheConfiguration: CacheConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.CacheConfiguration.property.s3">s3</a></code> | <code><a href="#@btc-embedded/cdk-gitlab-fleeting.CacheS3Configuration">CacheS3Configuration</a></code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.CacheConfiguration.property.shared">shared</a></code> | <code>boolean</code> | Enables cache sharing between runners. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.CacheConfiguration.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@btc-embedded/cdk-gitlab-fleeting.CacheConfiguration.property.s3"></a>

```typescript
public readonly s3: CacheS3Configuration;
```

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.CacheS3Configuration">CacheS3Configuration</a>

---

##### `shared`<sup>Optional</sup> <a name="shared" id="@btc-embedded/cdk-gitlab-fleeting.CacheConfiguration.property.shared"></a>

```typescript
public readonly shared: boolean;
```

- *Type:* boolean
- *Default:* false

Enables cache sharing between runners.

---

##### `type`<sup>Optional</sup> <a name="type" id="@btc-embedded/cdk-gitlab-fleeting.CacheConfiguration.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

### CacheS3Configuration <a name="CacheS3Configuration" id="@btc-embedded/cdk-gitlab-fleeting.CacheS3Configuration"></a>

Define cache configuration for S3 storage.

> [https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runnerscaches3-section](https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runnerscaches3-section)

#### Initializer <a name="Initializer" id="@btc-embedded/cdk-gitlab-fleeting.CacheS3Configuration.Initializer"></a>

```typescript
import { CacheS3Configuration } from '@btc-embedded/cdk-gitlab-fleeting'

const cacheS3Configuration: CacheS3Configuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.CacheS3Configuration.property.accessKey">accessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.CacheS3Configuration.property.authenticationType">authenticationType</a></code> | <code>string</code> | In GitLab 15.0 and later, explicitly set AuthenticationType to iam or access-key. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.CacheS3Configuration.property.bucketLocation">bucketLocation</a></code> | <code>string</code> | The name of the S3 region. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.CacheS3Configuration.property.bucketName">bucketName</a></code> | <code>string</code> | The name of the storage bucket where cache is stored. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.CacheS3Configuration.property.insecure">insecure</a></code> | <code>boolean</code> | Set to true if the S3 service is available by HTTP. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.CacheS3Configuration.property.secretKey">secretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.CacheS3Configuration.property.serverAddress">serverAddress</a></code> | <code>string</code> | The AWS S3 host. |

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@btc-embedded/cdk-gitlab-fleeting.CacheS3Configuration.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="@btc-embedded/cdk-gitlab-fleeting.CacheS3Configuration.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string
- *Default:* "iam"

In GitLab 15.0 and later, explicitly set AuthenticationType to iam or access-key.

> [https://gitlab.com/gitlab-org/gitlab-runner/-/issues/28171](https://gitlab.com/gitlab-org/gitlab-runner/-/issues/28171)

---

##### `bucketLocation`<sup>Optional</sup> <a name="bucketLocation" id="@btc-embedded/cdk-gitlab-fleeting.CacheS3Configuration.property.bucketLocation"></a>

```typescript
public readonly bucketLocation: string;
```

- *Type:* string

The name of the S3 region.

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@btc-embedded/cdk-gitlab-fleeting.CacheS3Configuration.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string
- *Default:* "runners-cache"

The name of the storage bucket where cache is stored.

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@btc-embedded/cdk-gitlab-fleeting.CacheS3Configuration.property.insecure"></a>

```typescript
public readonly insecure: boolean;
```

- *Type:* boolean
- *Default:* false

Set to true if the S3 service is available by HTTP.

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@btc-embedded/cdk-gitlab-fleeting.CacheS3Configuration.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

---

##### `serverAddress`<sup>Optional</sup> <a name="serverAddress" id="@btc-embedded/cdk-gitlab-fleeting.CacheS3Configuration.property.serverAddress"></a>

```typescript
public readonly serverAddress: string;
```

- *Type:* string
- *Default:* "s3.amazonaws.com"

The AWS S3 host.

---

### ConfigurationMapperProps <a name="ConfigurationMapperProps" id="@btc-embedded/cdk-gitlab-fleeting.ConfigurationMapperProps"></a>

#### Initializer <a name="Initializer" id="@btc-embedded/cdk-gitlab-fleeting.ConfigurationMapperProps.Initializer"></a>

```typescript
import { ConfigurationMapperProps } from '@btc-embedded/cdk-gitlab-fleeting'

const configurationMapperProps: ConfigurationMapperProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.ConfigurationMapperProps.property.globalConfiguration">globalConfiguration</a></code> | <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GlobalConfiguration">GlobalConfiguration</a></code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.ConfigurationMapperProps.property.runnersConfiguration">runnersConfiguration</a></code> | <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration">RunnerConfiguration</a>[]</code> | *No description.* |

---

##### `globalConfiguration`<sup>Required</sup> <a name="globalConfiguration" id="@btc-embedded/cdk-gitlab-fleeting.ConfigurationMapperProps.property.globalConfiguration"></a>

```typescript
public readonly globalConfiguration: GlobalConfiguration;
```

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.GlobalConfiguration">GlobalConfiguration</a>

---

##### `runnersConfiguration`<sup>Required</sup> <a name="runnersConfiguration" id="@btc-embedded/cdk-gitlab-fleeting.ConfigurationMapperProps.property.runnersConfiguration"></a>

```typescript
public readonly runnersConfiguration: RunnerConfiguration[];
```

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration">RunnerConfiguration</a>[]

---

### ConnectorConfig <a name="ConnectorConfig" id="@btc-embedded/cdk-gitlab-fleeting.ConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@btc-embedded/cdk-gitlab-fleeting.ConnectorConfig.Initializer"></a>

```typescript
import { ConnectorConfig } from '@btc-embedded/cdk-gitlab-fleeting'

const connectorConfig: ConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.ConnectorConfig.property.keyPath">keyPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.ConnectorConfig.property.os">os</a></code> | <code>string</code> | Os. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.ConnectorConfig.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.ConnectorConfig.property.protocolPort">protocolPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.ConnectorConfig.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.ConnectorConfig.property.useStaticCredentials">useStaticCredentials</a></code> | <code>boolean</code> | *No description.* |

---

##### `keyPath`<sup>Optional</sup> <a name="keyPath" id="@btc-embedded/cdk-gitlab-fleeting.ConnectorConfig.property.keyPath"></a>

```typescript
public readonly keyPath: string;
```

- *Type:* string

---

##### `os`<sup>Optional</sup> <a name="os" id="@btc-embedded/cdk-gitlab-fleeting.ConnectorConfig.property.os"></a>

```typescript
public readonly os: string;
```

- *Type:* string
- *Default:* linux

Os.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@btc-embedded/cdk-gitlab-fleeting.ConnectorConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `protocolPort`<sup>Optional</sup> <a name="protocolPort" id="@btc-embedded/cdk-gitlab-fleeting.ConnectorConfig.property.protocolPort"></a>

```typescript
public readonly protocolPort: number;
```

- *Type:* number

---

##### `username`<sup>Optional</sup> <a name="username" id="@btc-embedded/cdk-gitlab-fleeting.ConnectorConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `useStaticCredentials`<sup>Optional</sup> <a name="useStaticCredentials" id="@btc-embedded/cdk-gitlab-fleeting.ConnectorConfig.property.useStaticCredentials"></a>

```typescript
public readonly useStaticCredentials: boolean;
```

- *Type:* boolean

---

### DockerConfiguration <a name="DockerConfiguration" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration"></a>

Configure docker on the runners.

> [https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runnersdocker-section](https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runnersdocker-section)

#### Initializer <a name="Initializer" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.Initializer"></a>

```typescript
import { DockerConfiguration } from '@btc-embedded/cdk-gitlab-fleeting'

const dockerConfiguration: DockerConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.allowedImages">allowedImages</a></code> | <code>string[]</code> | Wildcard list of images that can be specified in the .gitlab-ci.yml file. If not present, all images are allowed (equivalent to ["*\/*:*"]). See Restrict Docker images and services. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.allowedServices">allowedServices</a></code> | <code>string[]</code> | Wildcard list of services that can be specified in the .gitlab-ci.yml file. If not present, all images are allowed (equivalent to [*\/*:*]). See Restrict Docker images and services. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.cacheDir">cacheDir</a></code> | <code>string</code> | Directory where Docker caches should be stored. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.capAdd">capAdd</a></code> | <code>string[]</code> | Add additional Linux capabilities to the container. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.capDrop">capDrop</a></code> | <code>string[]</code> | Drop additional Linux capabilities from the container. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.cpus">cpus</a></code> | <code>string</code> | Number of CPUs (available in Docker 1.13 or later. A string. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.cpusetCpus">cpusetCpus</a></code> | <code>string</code> | The control group’s CpusetCpus. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.cpuShares">cpuShares</a></code> | <code>number</code> | Number of CPU shares used to set relative CPU usage. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.devices">devices</a></code> | <code>string[]</code> | Share additional host devices with the container. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.disableCache">disableCache</a></code> | <code>boolean</code> | The Docker executor has two levels of caching: a global one (like any other executor) and a local cache based on Docker volumes. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.disableEntrypointOverwrite">disableEntrypointOverwrite</a></code> | <code>boolean</code> | Disable the image entrypoint overwriting. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.dns">dns</a></code> | <code>string[]</code> | A list of DNS servers for the container to use. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.dnsSearch">dnsSearch</a></code> | <code>string[]</code> | A list of DNS search domains. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.extraHosts">extraHosts</a></code> | <code>string[]</code> | Hosts that should be defined in container environment. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.gpus">gpus</a></code> | <code>string[]</code> | GPU devices for Docker container. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.helperImage">helperImage</a></code> | <code>string</code> | (Advanced) The default helper image used to clone repositories and upload artifacts. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.helperImageFlavor">helperImageFlavor</a></code> | <code>string</code> | Sets the helper image flavor (alpine, alpine3.12, alpine3.13, alpine3.14 or ubuntu). Defaults to alpine. The alpine flavor uses the same version as alpine3.12. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.host">host</a></code> | <code>string</code> | Custom Docker endpoint. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.hostname">hostname</a></code> | <code>string</code> | Custom hostname for the Docker container. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.image">image</a></code> | <code>string</code> | The image to run jobs with. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.links">links</a></code> | <code>string[]</code> | Containers that should be linked with container that runs the job. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.memory">memory</a></code> | <code>string</code> | The memory limit. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.memoryReservation">memoryReservation</a></code> | <code>string</code> | The memory soft limit. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.memorySwap">memorySwap</a></code> | <code>string</code> | The total memory limit. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.networkMode">networkMode</a></code> | <code>string</code> | Add container to a custom network. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.oomKillDisable">oomKillDisable</a></code> | <code>boolean</code> | If an out-of-memory (OOM) error occurs, do not kill processes in a container. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.oomScoreAdjust">oomScoreAdjust</a></code> | <code>string</code> | OOM score adjustment. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.privileged">privileged</a></code> | <code>boolean</code> | Make the container run in privileged mode. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.pullPolicy">pullPolicy</a></code> | <code>string</code> | The image pull policy: never, if-not-present or always (default). |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.runtime">runtime</a></code> | <code>string</code> | The runtime for the Docker container. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.securityOpt">securityOpt</a></code> | <code>string</code> | Security options (–security-opt in docker run). |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.shmSize">shmSize</a></code> | <code>number</code> | Shared memory size for images (in bytes). |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.sysctls">sysctls</a></code> | <code>string</code> | The sysctl options. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.tlsCertPath">tlsCertPath</a></code> | <code>string</code> | A directory where ca.pem, cert.pem or key.pem are stored and used to make a secure TLS connection to Docker. Useful in boot2docker. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.tlsVerify">tlsVerify</a></code> | <code>boolean</code> | Enable or disable TLS verification of connections to Docker daemon. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.usernsMode">usernsMode</a></code> | <code>string</code> | The user namespace mode for the container and Docker services when user namespace remapping option is enabled. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.volumeDriver">volumeDriver</a></code> | <code>string</code> | The volume driver to use for the container. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.volumes">volumes</a></code> | <code>string[]</code> | Additional volumes that should be mounted. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.volumesFrom">volumesFrom</a></code> | <code>string[]</code> | A list of volumes to inherit from another container in the form <container name>[:<ro\|rw>]. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.waitForServicesTimeout">waitForServicesTimeout</a></code> | <code>number</code> | How long to wait for Docker services. |

---

##### `allowedImages`<sup>Optional</sup> <a name="allowedImages" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.allowedImages"></a>

```typescript
public readonly allowedImages: string[];
```

- *Type:* string[]

Wildcard list of images that can be specified in the .gitlab-ci.yml file. If not present, all images are allowed (equivalent to ["*\/*:*"]). See Restrict Docker images and services.

---

##### `allowedServices`<sup>Optional</sup> <a name="allowedServices" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.allowedServices"></a>

```typescript
public readonly allowedServices: string[];
```

- *Type:* string[]

Wildcard list of services that can be specified in the .gitlab-ci.yml file. If not present, all images are allowed (equivalent to [*\/*:*]). See Restrict Docker images and services.

---

##### `cacheDir`<sup>Optional</sup> <a name="cacheDir" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.cacheDir"></a>

```typescript
public readonly cacheDir: string;
```

- *Type:* string

Directory where Docker caches should be stored.

This path can be absolute or relative to current working directory. See disable_cache for more information.

---

##### `capAdd`<sup>Optional</sup> <a name="capAdd" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.capAdd"></a>

```typescript
public readonly capAdd: string[];
```

- *Type:* string[]
- *Default:* ["CAP_SYS_ADMIN"]

Add additional Linux capabilities to the container.

---

##### `capDrop`<sup>Optional</sup> <a name="capDrop" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.capDrop"></a>

```typescript
public readonly capDrop: string[];
```

- *Type:* string[]

Drop additional Linux capabilities from the container.

---

##### `cpus`<sup>Optional</sup> <a name="cpus" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.cpus"></a>

```typescript
public readonly cpus: string;
```

- *Type:* string

Number of CPUs (available in Docker 1.13 or later. A string.

---

##### `cpusetCpus`<sup>Optional</sup> <a name="cpusetCpus" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.cpusetCpus"></a>

```typescript
public readonly cpusetCpus: string;
```

- *Type:* string

The control group’s CpusetCpus.

A string.

---

##### `cpuShares`<sup>Optional</sup> <a name="cpuShares" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.cpuShares"></a>

```typescript
public readonly cpuShares: number;
```

- *Type:* number

Number of CPU shares used to set relative CPU usage.

Default is 1024.

---

##### `devices`<sup>Optional</sup> <a name="devices" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.devices"></a>

```typescript
public readonly devices: string[];
```

- *Type:* string[]

Share additional host devices with the container.

---

##### `disableCache`<sup>Optional</sup> <a name="disableCache" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.disableCache"></a>

```typescript
public readonly disableCache: boolean;
```

- *Type:* boolean
- *Default:* false

The Docker executor has two levels of caching: a global one (like any other executor) and a local cache based on Docker volumes.

This configuration flag acts only on the local one which disables the use of automatically created (not mapped to a host directory) cache volumes. In other words, it only prevents creating a container that holds temporary files of builds, it does not disable the cache if the runner is configured in distributed cache mode.

---

##### `disableEntrypointOverwrite`<sup>Optional</sup> <a name="disableEntrypointOverwrite" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.disableEntrypointOverwrite"></a>

```typescript
public readonly disableEntrypointOverwrite: boolean;
```

- *Type:* boolean

Disable the image entrypoint overwriting.

---

##### `dns`<sup>Optional</sup> <a name="dns" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.dns"></a>

```typescript
public readonly dns: string[];
```

- *Type:* string[]

A list of DNS servers for the container to use.

---

##### `dnsSearch`<sup>Optional</sup> <a name="dnsSearch" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.dnsSearch"></a>

```typescript
public readonly dnsSearch: string[];
```

- *Type:* string[]

A list of DNS search domains.

---

##### `extraHosts`<sup>Optional</sup> <a name="extraHosts" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.extraHosts"></a>

```typescript
public readonly extraHosts: string[];
```

- *Type:* string[]

Hosts that should be defined in container environment.

---

##### `gpus`<sup>Optional</sup> <a name="gpus" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.gpus"></a>

```typescript
public readonly gpus: string[];
```

- *Type:* string[]

GPU devices for Docker container.

Uses the same format as the docker cli. View details in the Docker documentation.

---

##### `helperImage`<sup>Optional</sup> <a name="helperImage" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.helperImage"></a>

```typescript
public readonly helperImage: string;
```

- *Type:* string

(Advanced) The default helper image used to clone repositories and upload artifacts.

---

##### `helperImageFlavor`<sup>Optional</sup> <a name="helperImageFlavor" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.helperImageFlavor"></a>

```typescript
public readonly helperImageFlavor: string;
```

- *Type:* string

Sets the helper image flavor (alpine, alpine3.12, alpine3.13, alpine3.14 or ubuntu). Defaults to alpine. The alpine flavor uses the same version as alpine3.12.

---

##### `host`<sup>Optional</sup> <a name="host" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Custom Docker endpoint.

Default is DOCKER_HOST environment or unix:///var/run/docker.sock.

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Custom hostname for the Docker container.

---

##### `image`<sup>Optional</sup> <a name="image" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

The image to run jobs with.

---

##### `links`<sup>Optional</sup> <a name="links" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.links"></a>

```typescript
public readonly links: string[];
```

- *Type:* string[]

Containers that should be linked with container that runs the job.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

The memory limit.

A string.

---

##### `memoryReservation`<sup>Optional</sup> <a name="memoryReservation" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.memoryReservation"></a>

```typescript
public readonly memoryReservation: string;
```

- *Type:* string

The memory soft limit.

A string.

---

##### `memorySwap`<sup>Optional</sup> <a name="memorySwap" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.memorySwap"></a>

```typescript
public readonly memorySwap: string;
```

- *Type:* string

The total memory limit.

A string.

---

##### `networkMode`<sup>Optional</sup> <a name="networkMode" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.networkMode"></a>

```typescript
public readonly networkMode: string;
```

- *Type:* string

Add container to a custom network.

---

##### `oomKillDisable`<sup>Optional</sup> <a name="oomKillDisable" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.oomKillDisable"></a>

```typescript
public readonly oomKillDisable: boolean;
```

- *Type:* boolean

If an out-of-memory (OOM) error occurs, do not kill processes in a container.

---

##### `oomScoreAdjust`<sup>Optional</sup> <a name="oomScoreAdjust" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.oomScoreAdjust"></a>

```typescript
public readonly oomScoreAdjust: string;
```

- *Type:* string

OOM score adjustment.

Positive means kill earlier.

---

##### `privileged`<sup>Optional</sup> <a name="privileged" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.privileged"></a>

```typescript
public readonly privileged: boolean;
```

- *Type:* boolean
- *Default:* true

Make the container run in privileged mode.

Insecure.

---

##### `pullPolicy`<sup>Optional</sup> <a name="pullPolicy" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.pullPolicy"></a>

```typescript
public readonly pullPolicy: string;
```

- *Type:* string

The image pull policy: never, if-not-present or always (default).

View details in the pull policies documentation. You can also add multiple pull policies.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

The runtime for the Docker container.

---

##### `securityOpt`<sup>Optional</sup> <a name="securityOpt" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.securityOpt"></a>

```typescript
public readonly securityOpt: string;
```

- *Type:* string

Security options (–security-opt in docker run).

Takes a list of : separated key/values.

---

##### `shmSize`<sup>Optional</sup> <a name="shmSize" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.shmSize"></a>

```typescript
public readonly shmSize: number;
```

- *Type:* number
- *Default:* 0

Shared memory size for images (in bytes).

---

##### `sysctls`<sup>Optional</sup> <a name="sysctls" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.sysctls"></a>

```typescript
public readonly sysctls: string;
```

- *Type:* string

The sysctl options.

---

##### `tlsCertPath`<sup>Optional</sup> <a name="tlsCertPath" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.tlsCertPath"></a>

```typescript
public readonly tlsCertPath: string;
```

- *Type:* string

A directory where ca.pem, cert.pem or key.pem are stored and used to make a secure TLS connection to Docker. Useful in boot2docker.

---

##### `tlsVerify`<sup>Optional</sup> <a name="tlsVerify" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.tlsVerify"></a>

```typescript
public readonly tlsVerify: boolean;
```

- *Type:* boolean
- *Default:* false

Enable or disable TLS verification of connections to Docker daemon.

Disabled by default.

---

##### `usernsMode`<sup>Optional</sup> <a name="usernsMode" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.usernsMode"></a>

```typescript
public readonly usernsMode: string;
```

- *Type:* string

The user namespace mode for the container and Docker services when user namespace remapping option is enabled.

Available in Docker 1.10 or later.

---

##### `volumeDriver`<sup>Optional</sup> <a name="volumeDriver" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.volumeDriver"></a>

```typescript
public readonly volumeDriver: string;
```

- *Type:* string

The volume driver to use for the container.

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.volumes"></a>

```typescript
public readonly volumes: string[];
```

- *Type:* string[]

Additional volumes that should be mounted.

Same syntax as the Docker -v flag.

---

##### `volumesFrom`<sup>Optional</sup> <a name="volumesFrom" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.volumesFrom"></a>

```typescript
public readonly volumesFrom: string[];
```

- *Type:* string[]

A list of volumes to inherit from another container in the form <container name>[:<ro|rw>].

Access level defaults to read-write, but can be manually set to ro (read-only) or rw (read-write).

---

##### `waitForServicesTimeout`<sup>Optional</sup> <a name="waitForServicesTimeout" id="@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration.property.waitForServicesTimeout"></a>

```typescript
public readonly waitForServicesTimeout: number;
```

- *Type:* number
- *Default:* 300

How long to wait for Docker services.

Set to 0 to disable. Default is 30.

---

### GitlabAutoScalerProps <a name="GitlabAutoScalerProps" id="@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScalerProps"></a>

#### Initializer <a name="Initializer" id="@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScalerProps.Initializer"></a>

```typescript
import { GitlabAutoScalerProps } from '@btc-embedded/cdk-gitlab-fleeting'

const gitlabAutoScalerProps: GitlabAutoScalerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScalerProps.property.globalConfiguration">globalConfiguration</a></code> | <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GlobalConfiguration">GlobalConfiguration</a></code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScalerProps.property.runners">runners</a></code> | <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerUserProps">GitlabRunnerUserProps</a>[]</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScalerProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `globalConfiguration`<sup>Required</sup> <a name="globalConfiguration" id="@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScalerProps.property.globalConfiguration"></a>

```typescript
public readonly globalConfiguration: GlobalConfiguration;
```

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.GlobalConfiguration">GlobalConfiguration</a>

---

##### `runners`<sup>Required</sup> <a name="runners" id="@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScalerProps.property.runners"></a>

```typescript
public readonly runners: GitlabRunnerUserProps[];
```

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerUserProps">GitlabRunnerUserProps</a>[]

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@btc-embedded/cdk-gitlab-fleeting.GitlabAutoScalerProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

### GitlabRunnerProps <a name="GitlabRunnerProps" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerProps"></a>

#### Initializer <a name="Initializer" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerProps.Initializer"></a>

```typescript
import { GitlabRunnerProps } from '@btc-embedded/cdk-gitlab-fleeting'

const gitlabRunnerProps: GitlabRunnerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerProps.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerProps.property.machineImage">machineImage</a></code> | <code>aws-cdk-lib.aws_ec2.IMachineImage</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerProps.property.runnerConfig">runnerConfig</a></code> | <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration">RunnerConfiguration</a></code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerProps.property.runnerType">runnerType</a></code> | <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerType">RunnerType</a></code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerProps.property.userData">userData</a></code> | <code>aws-cdk-lib.aws_ec2.UserData</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerProps.property.cacheBucket">cacheBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerProps.property.launchTemplate">launchTemplate</a></code> | <code>aws-cdk-lib.aws_ec2.LaunchTemplateProps</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerProps.property.waitForUserdatafinish">waitForUserdatafinish</a></code> | <code>boolean</code> | *No description.* |

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType

---

##### `machineImage`<sup>Required</sup> <a name="machineImage" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerProps.property.machineImage"></a>

```typescript
public readonly machineImage: IMachineImage;
```

- *Type:* aws-cdk-lib.aws_ec2.IMachineImage

---

##### `runnerConfig`<sup>Required</sup> <a name="runnerConfig" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerProps.property.runnerConfig"></a>

```typescript
public readonly runnerConfig: RunnerConfiguration;
```

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration">RunnerConfiguration</a>

---

##### `runnerType`<sup>Required</sup> <a name="runnerType" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerProps.property.runnerType"></a>

```typescript
public readonly runnerType: RunnerType;
```

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerType">RunnerType</a>

---

##### `userData`<sup>Required</sup> <a name="userData" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerProps.property.userData"></a>

```typescript
public readonly userData: UserData;
```

- *Type:* aws-cdk-lib.aws_ec2.UserData

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

##### `cacheBucket`<sup>Optional</sup> <a name="cacheBucket" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerProps.property.cacheBucket"></a>

```typescript
public readonly cacheBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `launchTemplate`<sup>Optional</sup> <a name="launchTemplate" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerProps.property.launchTemplate"></a>

```typescript
public readonly launchTemplate: LaunchTemplateProps;
```

- *Type:* aws-cdk-lib.aws_ec2.LaunchTemplateProps

---

##### `waitForUserdatafinish`<sup>Optional</sup> <a name="waitForUserdatafinish" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerProps.property.waitForUserdatafinish"></a>

```typescript
public readonly waitForUserdatafinish: boolean;
```

- *Type:* boolean

---

### GitlabRunnerUserProps <a name="GitlabRunnerUserProps" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerUserProps"></a>

#### Initializer <a name="Initializer" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerUserProps.Initializer"></a>

```typescript
import { GitlabRunnerUserProps } from '@btc-embedded/cdk-gitlab-fleeting'

const gitlabRunnerUserProps: GitlabRunnerUserProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerUserProps.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerUserProps.property.runnerConfig">runnerConfig</a></code> | <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration">RunnerConfiguration</a></code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerUserProps.property.runnerType">runnerType</a></code> | <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerType">RunnerType</a></code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerUserProps.property.cacheBucket">cacheBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerUserProps.property.launchTemplate">launchTemplate</a></code> | <code>aws-cdk-lib.aws_ec2.LaunchTemplateProps</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerUserProps.property.machineImage">machineImage</a></code> | <code>aws-cdk-lib.aws_ec2.IMachineImage</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerUserProps.property.userData">userData</a></code> | <code>aws-cdk-lib.aws_ec2.UserData</code> | *No description.* |

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerUserProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType

---

##### `runnerConfig`<sup>Required</sup> <a name="runnerConfig" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerUserProps.property.runnerConfig"></a>

```typescript
public readonly runnerConfig: RunnerConfiguration;
```

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration">RunnerConfiguration</a>

---

##### `runnerType`<sup>Required</sup> <a name="runnerType" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerUserProps.property.runnerType"></a>

```typescript
public readonly runnerType: RunnerType;
```

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerType">RunnerType</a>

---

##### `cacheBucket`<sup>Optional</sup> <a name="cacheBucket" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerUserProps.property.cacheBucket"></a>

```typescript
public readonly cacheBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `launchTemplate`<sup>Optional</sup> <a name="launchTemplate" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerUserProps.property.launchTemplate"></a>

```typescript
public readonly launchTemplate: LaunchTemplateProps;
```

- *Type:* aws-cdk-lib.aws_ec2.LaunchTemplateProps

---

##### `machineImage`<sup>Optional</sup> <a name="machineImage" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerUserProps.property.machineImage"></a>

```typescript
public readonly machineImage: IMachineImage;
```

- *Type:* aws-cdk-lib.aws_ec2.IMachineImage

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@btc-embedded/cdk-gitlab-fleeting.GitlabRunnerUserProps.property.userData"></a>

```typescript
public readonly userData: UserData;
```

- *Type:* aws-cdk-lib.aws_ec2.UserData

---

### GlobalConfiguration <a name="GlobalConfiguration" id="@btc-embedded/cdk-gitlab-fleeting.GlobalConfiguration"></a>

You can change the behavior of GitLab Runner and of individual registered runners.

This imitates the structure of Gitlab Runner advanced configuration that originally is set with config.toml file.

> [https://docs.gitlab.com/runner/configuration/advanced-configuration.html](https://docs.gitlab.com/runner/configuration/advanced-configuration.html)

#### Initializer <a name="Initializer" id="@btc-embedded/cdk-gitlab-fleeting.GlobalConfiguration.Initializer"></a>

```typescript
import { GlobalConfiguration } from '@btc-embedded/cdk-gitlab-fleeting'

const globalConfiguration: GlobalConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GlobalConfiguration.property.checkInterval">checkInterval</a></code> | <code>number</code> | The check_interval option defines how often the runner should check GitLab for new jobs\| in seconds. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GlobalConfiguration.property.concurrent">concurrent</a></code> | <code>number</code> | The limit of the jobs that can be run concurrently across all runners (concurrent). |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GlobalConfiguration.property.logFormat">logFormat</a></code> | <code>string</code> | The log format. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GlobalConfiguration.property.logLevel">logLevel</a></code> | <code>string</code> | The log_level. |

---

##### `checkInterval`<sup>Optional</sup> <a name="checkInterval" id="@btc-embedded/cdk-gitlab-fleeting.GlobalConfiguration.property.checkInterval"></a>

```typescript
public readonly checkInterval: number;
```

- *Type:* number
- *Default:* 0

The check_interval option defines how often the runner should check GitLab for new jobs| in seconds.

---

##### `concurrent`<sup>Optional</sup> <a name="concurrent" id="@btc-embedded/cdk-gitlab-fleeting.GlobalConfiguration.property.concurrent"></a>

```typescript
public readonly concurrent: number;
```

- *Type:* number
- *Default:* 10

The limit of the jobs that can be run concurrently across all runners (concurrent).

---

##### `logFormat`<sup>Optional</sup> <a name="logFormat" id="@btc-embedded/cdk-gitlab-fleeting.GlobalConfiguration.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string
- *Default:* "runner"

The log format.

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@btc-embedded/cdk-gitlab-fleeting.GlobalConfiguration.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string
- *Default:* "info"

The log_level.

---

### ManagerProps <a name="ManagerProps" id="@btc-embedded/cdk-gitlab-fleeting.ManagerProps"></a>

#### Initializer <a name="Initializer" id="@btc-embedded/cdk-gitlab-fleeting.ManagerProps.Initializer"></a>

```typescript
import { ManagerProps } from '@btc-embedded/cdk-gitlab-fleeting'

const managerProps: ManagerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.ManagerProps.property.gitlabRunners">gitlabRunners</a></code> | <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunner">GitlabRunner</a>[]</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.ManagerProps.property.globalConfiguration">globalConfiguration</a></code> | <code><a href="#@btc-embedded/cdk-gitlab-fleeting.GlobalConfiguration">GlobalConfiguration</a></code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.ManagerProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.ManagerProps.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.ManagerProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |

---

##### `gitlabRunners`<sup>Required</sup> <a name="gitlabRunners" id="@btc-embedded/cdk-gitlab-fleeting.ManagerProps.property.gitlabRunners"></a>

```typescript
public readonly gitlabRunners: GitlabRunner[];
```

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.GitlabRunner">GitlabRunner</a>[]

---

##### `globalConfiguration`<sup>Required</sup> <a name="globalConfiguration" id="@btc-embedded/cdk-gitlab-fleeting.ManagerProps.property.globalConfiguration"></a>

```typescript
public readonly globalConfiguration: GlobalConfiguration;
```

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.GlobalConfiguration">GlobalConfiguration</a>

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@btc-embedded/cdk-gitlab-fleeting.ManagerProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@btc-embedded/cdk-gitlab-fleeting.ManagerProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType

---

##### `role`<sup>Optional</sup> <a name="role" id="@btc-embedded/cdk-gitlab-fleeting.ManagerProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---

### PluginConfig <a name="PluginConfig" id="@btc-embedded/cdk-gitlab-fleeting.PluginConfig"></a>

#### Initializer <a name="Initializer" id="@btc-embedded/cdk-gitlab-fleeting.PluginConfig.Initializer"></a>

```typescript
import { PluginConfig } from '@btc-embedded/cdk-gitlab-fleeting'

const pluginConfig: PluginConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.PluginConfig.property.name">name</a></code> | <code>string</code> | Name of the autoscaling Group. |

---

##### `name`<sup>Required</sup> <a name="name" id="@btc-embedded/cdk-gitlab-fleeting.PluginConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the autoscaling Group.

---

### RunnerConfiguration <a name="RunnerConfiguration" id="@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration"></a>

#### Initializer <a name="Initializer" id="@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.Initializer"></a>

```typescript
import { RunnerConfiguration } from '@btc-embedded/cdk-gitlab-fleeting'

const runnerConfiguration: RunnerConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.autoscaler">autoscaler</a></code> | <code><a href="#@btc-embedded/cdk-gitlab-fleeting.AutoscalerConfiguration">AutoscalerConfiguration</a></code> | The runner's Docker Machine configuration. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.token">token</a></code> | <code>string</code> | The runner’s authentication token, which is obtained during runner registration. Not the same as the registration token. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.buildsDir">buildsDir</a></code> | <code>string</code> | Absolute path to a directory where builds are stored in the context of the selected executor. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.cache">cache</a></code> | <code><a href="#@btc-embedded/cdk-gitlab-fleeting.CacheConfiguration">CacheConfiguration</a></code> | The runner's AWS S3 cache configuration. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.cacheDir">cacheDir</a></code> | <code>string</code> | Absolute path to a directory where build caches are stored in context of selected executor. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.cloneUrl">cloneUrl</a></code> | <code>string</code> | Overwrite the URL for the GitLab instance. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.debugTraceDisabled">debugTraceDisabled</a></code> | <code>boolean</code> | Disables the CI_DEBUG_TRACE feature. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.docker">docker</a></code> | <code><a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration">DockerConfiguration</a></code> | The runner's docker configuration. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.environment">environment</a></code> | <code>string[]</code> | Append or overwrite environment variables. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.executor">executor</a></code> | <code>string</code> | Select how a project should be built. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.limit">limit</a></code> | <code>number</code> | Limit how many jobs can be handled concurrently by this registered runner. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.name">name</a></code> | <code>string</code> | The runner’s description. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.outputLimit">outputLimit</a></code> | <code>number</code> | Maximum build log size in kilobytes. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.postBuildScript">postBuildScript</a></code> | <code>string</code> | Commands to be executed on the runner just after executing the build, but before executing after_script. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.preBuildScript">preBuildScript</a></code> | <code>string</code> | Commands to be executed on the runner after cloning the Git repository, but before executing the build. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.preCloneScript">preCloneScript</a></code> | <code>string</code> | Commands to be executed on the runner before cloning the Git repository. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.referees">referees</a></code> | <code>string</code> | Extra job monitoring workers that pass their results as job artifacts to GitLab. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.requestConcurrency">requestConcurrency</a></code> | <code>number</code> | Limit number of concurrent requests for new jobs from GitLab. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.shell">shell</a></code> | <code>string</code> | Name of shell to generate the script. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.tlsCaFile">tlsCaFile</a></code> | <code>string</code> | When using HTTPS, file that contains the certificates to verify the peer. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.tlsCertFile">tlsCertFile</a></code> | <code>string</code> | When using HTTPS, file that contains the certificate to authenticate with the peer. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.tlsKeyFile">tlsKeyFile</a></code> | <code>string</code> | When using HTTPS, file that contains the private key to authenticate with the peer. |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.url">url</a></code> | <code>string</code> | GitLab instance URL. |

---

##### `autoscaler`<sup>Required</sup> <a name="autoscaler" id="@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.autoscaler"></a>

```typescript
public readonly autoscaler: AutoscalerConfiguration;
```

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.AutoscalerConfiguration">AutoscalerConfiguration</a>

The runner's Docker Machine configuration.

> [https://docs.gitlab.com/runner/executors/docker_autoscaler/](https://docs.gitlab.com/runner/executors/docker_autoscaler/)

---

##### `token`<sup>Required</sup> <a name="token" id="@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

The runner’s authentication token, which is obtained during runner registration. Not the same as the registration token.

<strong>Will be replaced by the runner's props token SSM Parameter</strong>

> [https://docs.gitlab.com/ee/api/runners.html#register-a-new-runner](https://docs.gitlab.com/ee/api/runners.html#register-a-new-runner)

---

##### `buildsDir`<sup>Optional</sup> <a name="buildsDir" id="@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.buildsDir"></a>

```typescript
public readonly buildsDir: string;
```

- *Type:* string

Absolute path to a directory where builds are stored in the context of the selected executor.

For example, locally, Docker, or SSH.

---

##### `cache`<sup>Optional</sup> <a name="cache" id="@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.cache"></a>

```typescript
public readonly cache: CacheConfiguration;
```

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.CacheConfiguration">CacheConfiguration</a>

The runner's AWS S3 cache configuration.

> [https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runnerscaches3-section](https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runnerscaches3-section)

---

##### `cacheDir`<sup>Optional</sup> <a name="cacheDir" id="@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.cacheDir"></a>

```typescript
public readonly cacheDir: string;
```

- *Type:* string

Absolute path to a directory where build caches are stored in context of selected executor.

For example, locally, Docker, or SSH. If the docker executor is used, this directory needs to be included in its volumes parameter.

---

##### `cloneUrl`<sup>Optional</sup> <a name="cloneUrl" id="@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.cloneUrl"></a>

```typescript
public readonly cloneUrl: string;
```

- *Type:* string

Overwrite the URL for the GitLab instance.

Used only if the runner can’t connect to the GitLab URL.

---

##### `debugTraceDisabled`<sup>Optional</sup> <a name="debugTraceDisabled" id="@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.debugTraceDisabled"></a>

```typescript
public readonly debugTraceDisabled: boolean;
```

- *Type:* boolean

Disables the CI_DEBUG_TRACE feature.

When set to true, then debug log (trace) remains disabled, even if CI_DEBUG_TRACE is set to true by the user.

---

##### `docker`<sup>Optional</sup> <a name="docker" id="@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.docker"></a>

```typescript
public readonly docker: DockerConfiguration;
```

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.DockerConfiguration">DockerConfiguration</a>

The runner's docker configuration.

> [https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runnersdocker-section](https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runnersdocker-section)

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.environment"></a>

```typescript
public readonly environment: string[];
```

- *Type:* string[]
- *Default:* ["DOCKER_DRIVER=overlay2", "DOCKER_TLS_CERTDIR=/certs"]

Append or overwrite environment variables.

---

##### `executor`<sup>Optional</sup> <a name="executor" id="@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.executor"></a>

```typescript
public readonly executor: string;
```

- *Type:* string
- *Default:* "docker+machine"

Select how a project should be built.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number
- *Default:* 10

Limit how many jobs can be handled concurrently by this registered runner.

0 (default) means do not limit.

---

##### `name`<sup>Optional</sup> <a name="name" id="@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* "gitlab-runner"

The runner’s description.

Informational only.

---

##### `outputLimit`<sup>Optional</sup> <a name="outputLimit" id="@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.outputLimit"></a>

```typescript
public readonly outputLimit: number;
```

- *Type:* number
- *Default:* 52428800 (50GB)

Maximum build log size in kilobytes.

Default is 4096 (4MB).

---

##### `postBuildScript`<sup>Optional</sup> <a name="postBuildScript" id="@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.postBuildScript"></a>

```typescript
public readonly postBuildScript: string;
```

- *Type:* string

Commands to be executed on the runner just after executing the build, but before executing after_script.

To insert multiple commands, use a (triple-quoted) multi-line string or \n character.

---

##### `preBuildScript`<sup>Optional</sup> <a name="preBuildScript" id="@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.preBuildScript"></a>

```typescript
public readonly preBuildScript: string;
```

- *Type:* string

Commands to be executed on the runner after cloning the Git repository, but before executing the build.

To insert multiple commands, use a (triple-quoted) multi-line string or \n character.

---

##### `preCloneScript`<sup>Optional</sup> <a name="preCloneScript" id="@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.preCloneScript"></a>

```typescript
public readonly preCloneScript: string;
```

- *Type:* string

Commands to be executed on the runner before cloning the Git repository.

Use it to adjust the Git client configuration first, for example. To insert multiple commands, use a (triple-quoted) multi-line string or \n character.

---

##### `referees`<sup>Optional</sup> <a name="referees" id="@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.referees"></a>

```typescript
public readonly referees: string;
```

- *Type:* string

Extra job monitoring workers that pass their results as job artifacts to GitLab.

---

##### `requestConcurrency`<sup>Optional</sup> <a name="requestConcurrency" id="@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.requestConcurrency"></a>

```typescript
public readonly requestConcurrency: number;
```

- *Type:* number

Limit number of concurrent requests for new jobs from GitLab.

Default is 1.

---

##### `shell`<sup>Optional</sup> <a name="shell" id="@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.shell"></a>

```typescript
public readonly shell: string;
```

- *Type:* string

Name of shell to generate the script.

Default value is platform dependent.

---

##### `tlsCaFile`<sup>Optional</sup> <a name="tlsCaFile" id="@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.tlsCaFile"></a>

```typescript
public readonly tlsCaFile: string;
```

- *Type:* string

When using HTTPS, file that contains the certificates to verify the peer.

See Self-signed certificates or custom Certification Authorities documentation.

---

##### `tlsCertFile`<sup>Optional</sup> <a name="tlsCertFile" id="@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.tlsCertFile"></a>

```typescript
public readonly tlsCertFile: string;
```

- *Type:* string

When using HTTPS, file that contains the certificate to authenticate with the peer.

---

##### `tlsKeyFile`<sup>Optional</sup> <a name="tlsKeyFile" id="@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.tlsKeyFile"></a>

```typescript
public readonly tlsKeyFile: string;
```

- *Type:* string

When using HTTPS, file that contains the private key to authenticate with the peer.

---

##### `url`<sup>Optional</sup> <a name="url" id="@btc-embedded/cdk-gitlab-fleeting.RunnerConfiguration.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string
- *Default:* "https://gitlab.com"

GitLab instance URL.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigurationMapper <a name="ConfigurationMapper" id="@btc-embedded/cdk-gitlab-fleeting.ConfigurationMapper"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.ConfigurationMapper.toToml">toToml</a></code> | *No description.* |

---

##### `toToml` <a name="toToml" id="@btc-embedded/cdk-gitlab-fleeting.ConfigurationMapper.toToml"></a>

```typescript
public toToml(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.ConfigurationMapper.fromProps">fromProps</a></code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.ConfigurationMapper.generator">generator</a></code> | *No description.* |

---

##### `fromProps` <a name="fromProps" id="@btc-embedded/cdk-gitlab-fleeting.ConfigurationMapper.fromProps"></a>

```typescript
import { ConfigurationMapper } from '@btc-embedded/cdk-gitlab-fleeting'

ConfigurationMapper.fromProps(props: ConfigurationMapperProps)
```

###### `props`<sup>Required</sup> <a name="props" id="@btc-embedded/cdk-gitlab-fleeting.ConfigurationMapper.fromProps.parameter.props"></a>

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.ConfigurationMapperProps">ConfigurationMapperProps</a>

---

##### `generator` <a name="generator" id="@btc-embedded/cdk-gitlab-fleeting.ConfigurationMapper.generator"></a>

```typescript
import { ConfigurationMapper } from '@btc-embedded/cdk-gitlab-fleeting'

ConfigurationMapper.generator(props: ConfigurationMapperProps)
```

###### `props`<sup>Required</sup> <a name="props" id="@btc-embedded/cdk-gitlab-fleeting.ConfigurationMapper.generator.parameter.props"></a>

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.ConfigurationMapperProps">ConfigurationMapperProps</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.ConfigurationMapper.property.props">props</a></code> | <code><a href="#@btc-embedded/cdk-gitlab-fleeting.ConfigurationMapperProps">ConfigurationMapperProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@btc-embedded/cdk-gitlab-fleeting.ConfigurationMapper.property.props"></a>

```typescript
public readonly props: ConfigurationMapperProps;
```

- *Type:* <a href="#@btc-embedded/cdk-gitlab-fleeting.ConfigurationMapperProps">ConfigurationMapperProps</a>

---



## Enums <a name="Enums" id="Enums"></a>

### AutoScalerPlugins <a name="AutoScalerPlugins" id="@btc-embedded/cdk-gitlab-fleeting.AutoScalerPlugins"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.AutoScalerPlugins.AWS">AWS</a></code> | *No description.* |

---

##### `AWS` <a name="AWS" id="@btc-embedded/cdk-gitlab-fleeting.AutoScalerPlugins.AWS"></a>

---


### RunnerType <a name="RunnerType" id="@btc-embedded/cdk-gitlab-fleeting.RunnerType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerType.INSTANCE_LINUX">INSTANCE_LINUX</a></code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerType.INSTANCE_WINDOWS">INSTANCE_WINDOWS</a></code> | *No description.* |
| <code><a href="#@btc-embedded/cdk-gitlab-fleeting.RunnerType.INSTANCE_DOCKER">INSTANCE_DOCKER</a></code> | *No description.* |

---

##### `INSTANCE_LINUX` <a name="INSTANCE_LINUX" id="@btc-embedded/cdk-gitlab-fleeting.RunnerType.INSTANCE_LINUX"></a>

---


##### `INSTANCE_WINDOWS` <a name="INSTANCE_WINDOWS" id="@btc-embedded/cdk-gitlab-fleeting.RunnerType.INSTANCE_WINDOWS"></a>

---


##### `INSTANCE_DOCKER` <a name="INSTANCE_DOCKER" id="@btc-embedded/cdk-gitlab-fleeting.RunnerType.INSTANCE_DOCKER"></a>

---

