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
  github: true,
  githubOptions: {
    mergify: false,
  },
  autoMerge: false,
  buildWorkflowOptions: {
    mutableBuild: false,
  },
  depsUpgrade: false,
  pullRequestTemplate: false,
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: ["@types/lodash"] /* Build dependencies for this module. */,
  deps: ["lodash", "@iarna/toml"] /* Runtime dependencies of this module. */,
  bundledDeps: [
    "@iarna/toml",
    "lodash",
  ] /* Runtime dependencies of this module that should be bundled. */,
  // packageName: undefined,  /* The "name" in package.json. */
  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  npmProvenance: false,
  packageName: "@btc-embedded/cdk-gitlab-fleeting",
  releaseEnvironment: "npm",
  releaseTrigger: ReleaseTrigger.continuous(),
  workflowNodeVersion: "24.x",
  workflowBootstrapSteps: [
    {
      name: "Bootstrap Node.js for Corepack",
      uses: "actions/setup-node@v5",
      with: {
        "node-version": "24.x",
      },
    },
    {
      name: "Enable Corepack",
      run: "corepack enable",
    },
  ],
  packageManager: javascript.NodePackageManager.YARN_BERRY,
  yarnBerryOptions: {
    version: "4.12.0",
    zeroInstalls: false,
    yarnRcOptions: {
      nodeLinker: javascript.YarnNodeLinker.NODE_MODULES,
    },
  },
});
project.addPackageIgnore("/.yarn/");
project.addPackageIgnore("/.yarnrc.yml");
project.synth();
