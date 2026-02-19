export interface AutoscalerConfiguration {
  /**
   * Minimum number of runners to keep online.
   *
   * @default 0
   */
  readonly minRunners?: number;
  /**
     * GitLab fleet plugin for the autoscaler
     *
    //  * @default aws
     */
  readonly plugin?: AutoScalerPlugins;
  /**
   * Capacity per instance for the autoscaler
   *
   * @default 1
   */
  readonly capacityPerInstance?: number;
  readonly maxUseCount?: number;
  /**
   * The maximum number of instances that are allowed, this is regardless of the instance state (pending, running, deleting) (0 means unlimited)
   *
   * @default 0
   */
  readonly maxInstances?: number;
  /**
   * Specifies if all provision instances are deleted when GitLab Runner is shutting down
   *
   * @default false
   */
  readonly deleteInstancesOnShutdown?: boolean;
  readonly instanceReadyCommand?: string;
  readonly instanceAcquireTimeout?: number;
  readonly pluginConfig?: PluginConfig;
  readonly connectorConfig?: ConnectorConfig;
}
export enum AutoScalerPlugins {
  AWS = "aws:latest",
}

// Configuration for AWS Fleet Plugin https://gitlab.com/gitlab-org/fleeting/plugins/aws
export interface PluginConfig {
  /**
   * Name of the autoscaling Group
   */
  readonly name: string;
}
export interface ConnectorConfig {
  /**
   * Os
   * @default linux
   */
  readonly os?: string;
  readonly protocol?: string;
  readonly protocolPort?: number;
  readonly username?: string;
  readonly useStaticCredentials?: boolean;
  readonly keyPath?: string;
}
