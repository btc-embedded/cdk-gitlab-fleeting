import { awscdk, javascript } from "projen";
import { ReleaseTrigger } from "projen/lib/release";

const project = new awscdk.AwsCdkConstructLibrary({
  author: "BTC Embedded Systems AG",
  authorAddress: "https://btc-embedded.com",
  authorOrganization: true,
  cdkVersion: "2.200.0",
  defaultReleaseBranch: "main",
  jsiiVersion: "~5.9.0",
  name: "cdk-gitlab-fleeting",
  projenrcTs: true,
  prettier: true,
  repositoryUrl: "https://github.com/btc-embedded/cdk-gitlab-fleeting.git",
  stability: "experimental",
  github: false, // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: ["@types/lodash"] /* Build dependencies for this module. */,
  deps: ["lodash", "@iarna/toml"] /* Runtime dependencies of this module. */,
  bundledDeps: [
    "@iarna/toml",
    "lodash",
  ] /* Runtime dependencies of this module that should be bundled. */,
  // packageName: undefined,  /* The "name" in package.json. */
  releaseToNpm: true,
  packageName: "@btc-embedded/cdk-gitlab-fleeting",
  releaseTrigger: ReleaseTrigger.manual(),
  packageManager: javascript.NodePackageManager.YARN_BERRY,
  yarnBerryOptions: {
    version: "4.12.0",
    zeroInstalls: false,
    yarnRcOptions: {
      nodeLinker: javascript.YarnNodeLinker.NODE_MODULES,
    },
  },
});
project.synth();
