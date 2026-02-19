import {
  InstanceArchitecture,
  AmazonLinuxCpuType,
  InstanceType,
} from "aws-cdk-lib/aws-ec2";

export function instanceTypeToAmazonLinuxCpuType(
  instanceType: InstanceType,
): AmazonLinuxCpuType {
  const architecture = instanceType.architecture;
  if (architecture === InstanceArchitecture.ARM_64) {
    return AmazonLinuxCpuType.ARM_64;
  } else if (architecture === InstanceArchitecture.X86_64) {
    return AmazonLinuxCpuType.X86_64;
  }

  throw new Error(`Unsupported instance architecture '${architecture}'`);
}
