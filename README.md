# cdk-gitlab-fleeting

AWS CDK constructs for deploying and auto-scaling GitLab Runners on AWS.

## Overview

This library provides reusable AWS CDK constructs to help you deploy, manage, and auto-scale GitLab Runners in your AWS environment. It supports both Linux and Windows runners, integrates with your VPC, and is designed for teams using GitLab CI/CD with dynamic scaling needs.

## Features

- Auto-scaling GitLab Runners (EC2-based)
- Supports Linux and Windows runners
- Customizable runner configuration
- VPC integration
- Easy integration into your CDK stacks

## Getting Started

1. Install the package:

   ```shell
   yarn add @btc-embedded/cdk-gitlab-fleeting
   # or
   npm install @btc-embedded/cdk-gitlab-fleeting
   ```

2. Use the constructs in your CDK app (TypeScript example):
   Linux Instance runner 
   ```ts
   import { GitlabAutoScaler } from "@btc-embedded/cdk-gitlab-fleeting";

   new GitlabAutoScaler(this, "GitlabAutoScaler", {
     vpc, // your VPC
     globalConfiguration: {
       /* ... */
     },
     runners: [
        instanceType: InstanceType.of(InstanceClass.T3A, InstanceSize.SMALL),
        runnerType: RunnerType.INSTANCE_LINUX,
          runnerConfig: {
            token: "SSMParameterName",      
        ],
   });
   ```
   Docker Autoscaler
    ```ts
   import { GitlabAutoScaler } from "@btc-embedded/cdk-gitlab-fleeting";

   new GitlabAutoScaler(this, "GitlabAutoScaler", {
     vpc, // your VPC
     globalConfiguration: {
       /* ... */
     },
     runners: [
        instanceType: InstanceType.of(InstanceClass.T3A, InstanceSize.SMALL),
        runnerType: RunnerType.INSTANCE_DOCKER,
          runnerConfig: {
            token: "SSMParameterName",      
        ],
   });
   ```
## License

Apache-2.0
