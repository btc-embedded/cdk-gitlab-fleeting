import { readFileSync } from "fs";
import { join } from "path";
import { parse } from "@iarna/toml";
import { AutoScalerPlugins } from "../src/runner-configuration/autoscaler-configuration";
import { ConfigurationMapper } from "../src/runner-configuration/configuration-mapper";
import { GlobalConfiguration } from "../src/runner-configuration/global-configuration";
import { RunnerConfiguration } from "../src/runner-configuration/runner-configuration";

describe("ConfigurationMapper", () => {
  const exampleTomlPath = join(__dirname, "exampleConfig.toml");

  test("should generate valid TOML configuration matching example structure", () => {
    // Read the example TOML configuration
    const exampleToml = readFileSync(exampleTomlPath, "utf8");
    const exampleConfig = parse(exampleToml);

    // Create configuration that matches the example
    const globalConfig: GlobalConfiguration = {
      concurrent: 10,
    };
    const runnerConfig: RunnerConfiguration = {
      name: "instance autoscaler example",
      url: "https://gitlab.com",
      token: "<token>",
      shell: "sh",
      executor: "instance",
      autoscaler: {
        plugin: AutoScalerPlugins.AWS,
        capacityPerInstance: 1,
        maxUseCount: 1,
        pluginConfig: {
          name: "my-linux-asg",
        },
        connectorConfig: {
          keyPath: "my-key-pair",
        },

        // Note: maxInstances is not in the interface but appears in example
      },
      cache: {
        s3: {
          serverAddress: "s3.amazonaws.com",
        },
      },
    };

    // Generate TOML using ConfigurationMapper
    const mapper = ConfigurationMapper.generator({
      globalConfiguration: globalConfig,
      runnersConfiguration: [runnerConfig],
    });

    const generatedToml = mapper.toToml();
    console.log("Generated TOML:");
    console.log(generatedToml);
    const generatedConfig = parse(generatedToml);

    // Validate structure matches example
    expect(generatedConfig.concurrent).toBe(exampleConfig.concurrent);
    expect(Array.isArray(generatedConfig.runners)).toBe(true);
    expect(generatedConfig.runners).toHaveLength(1);

    const runner = (generatedConfig.runners as any[])[0];
    const exampleRunner = (exampleConfig.runners as any[])[0];

    // Validate key runner properties
    expect(runner.name).toBe(exampleRunner.name);
    expect(runner.url).toBe(exampleRunner.url);
    expect(runner.shell).toBe(exampleRunner.shell);
    expect(runner.executor).toBe(exampleRunner.executor);

    // Validate autoscaler configuration exists
    expect(runner.autoscaler).toBeDefined();
    expect(runner.autoscaler.plugin).toBe(exampleRunner.autoscaler.plugin);
    expect(runner.autoscaler.capacity_per_instance).toBe(
      exampleRunner.autoscaler.capacity_per_instance,
    );

    console.log("Generated TOML:");
    console.log(generatedToml);
    console.log("\nExample TOML:");
    console.log(exampleToml);
  });

  test("should handle missing optional configurations gracefully", () => {
    const globalConfig: GlobalConfiguration = {
      concurrent: 5,
    };

    const minimalRunnerConfig: RunnerConfiguration = {
      name: "minimal runner",
      url: "https://gitlab.com",
      token: "test-token",
      autoscaler: {
        plugin: AutoScalerPlugins.AWS,
      },
    };

    const mapper = ConfigurationMapper.generator({
      globalConfiguration: globalConfig,
      runnersConfiguration: [minimalRunnerConfig],
    });

    const toml = mapper.toToml();
    const parsedConfig = parse(toml);

    // Should not throw and should produce valid TOML
    expect(parsedConfig.concurrent).toBe(5);
    expect(Array.isArray(parsedConfig.runners)).toBe(true);

    const runner = (parsedConfig.runners as any[])[0];
    expect(runner.name).toBe("minimal runner");
    expect(runner.autoscaler).toBeDefined();
    expect(runner.autoscaler.plugin).toBe("aws:latest");
  });

  test("should handle configurations without applying defaults", () => {
    const globalConfig: GlobalConfiguration = {
      concurrent: 10,
      checkInterval: 10,
      logFormat: "runner",
      logLevel: "info",
    };

    const runnerConfig: RunnerConfiguration = {
      url: "https://gitlab.com",
      limit: 10,
      executor: "instance",
      outputLimit: 52428800,
      autoscaler: {
        plugin: AutoScalerPlugins.AWS,
      },
      token: "xoXo",
    };

    const mapper = ConfigurationMapper.generator({
      globalConfiguration: globalConfig,
      runnersConfiguration: [runnerConfig],
    });

    const toml = mapper.toToml();
    const parsedConfig = parse(toml);

    // Check that provided values are preserved (defaults are now applied by GitlabAutoScaler)
    expect(parsedConfig.concurrent).toBe(10);
    expect(parsedConfig.check_interval).toBe(10);
    expect(parsedConfig.log_format).toBe("runner");
    expect(parsedConfig.log_level).toBe("info");

    const runner = (parsedConfig.runners as any[])[0];
    expect(runner.url).toBe("https://gitlab.com");
    expect(runner.limit).toBe(10);
    expect(runner.executor).toBe("instance");
    expect(runner.output_limit).toBe(52428800);
  });

  test("should generate syntactically valid TOML", () => {
    const globalConfig: GlobalConfiguration = {
      concurrent: 10,
      logLevel: "info",
    };

    const runnerConfig: RunnerConfiguration = {
      name: "test runner",
      url: "https://gitlab.example.com",
      token: "glrt-test123",
      executor: "instance",
      autoscaler: {
        plugin: AutoScalerPlugins.AWS,
        capacityPerInstance: 1,
      },
      docker: {
        image: "alpine:latest",
        privileged: true,
      },
    };

    const mapper = ConfigurationMapper.generator({
      globalConfiguration: globalConfig,
      runnersConfiguration: [runnerConfig],
    });

    const toml = mapper.toToml();

    // Should parse without throwing
    expect(() => parse(toml)).not.toThrow();

    const parsedConfig = parse(toml);
    expect(parsedConfig).toBeDefined();

    console.log("Full generated TOML with docker config:");
    console.log(toml);
  });
});
