import { AnyJson, JsonArray, JsonMap, stringify } from "@iarna/toml";
import { camelCase, snakeCase } from "lodash";

import { GlobalConfiguration } from "./global-configuration";
import { RunnerConfiguration } from "./runner-configuration";

export interface ConfigurationMapperProps {
  readonly globalConfiguration: GlobalConfiguration;
  readonly runnersConfiguration: RunnerConfiguration[];
}

export class ConfigurationMapper {
  public static generator(props: ConfigurationMapperProps) {
    const { globalConfiguration, runnersConfiguration } = props;

    return new ConfigurationMapper({
      globalConfiguration: globalConfiguration,
      runnersConfiguration: runnersConfiguration.map(
        (item): RunnerConfiguration => {
          return item;
        },
      ),
    });
  }

  public static fromProps(props: ConfigurationMapperProps) {
    return new ConfigurationMapper(props);
  }

  private constructor(readonly props: ConfigurationMapperProps) {}

  public toToml(): string {
    return stringify(this._toJsonMap());
  }

  /**
   * @internal
   */
  public _toJsonMap(): JsonMap {
    const { globalConfiguration, runnersConfiguration } = this.props;

    const result: JsonMap = toJsonMap(globalConfiguration, snakeCase);

    result.runners = [] as JsonMap[];
    for (const config of runnersConfiguration) {
      const runner: JsonMap = toJsonMap(config, snakeCase);

      // Fix naming convention inconsistencies
      runner["tls-ca-file"] = runner.tls_ca_file;
      delete runner.tls_ca_file;
      runner["tls-cert-file"] = runner.tls_cert_file;
      delete runner.tls_ca_file;
      runner["tls-key-file"] = runner.tls_key_file;
      delete runner.tls_ca_file;

      if (config.docker) {
        runner.docker = toJsonMap(config.docker, snakeCase);
      }
      runner.autoscaler = toJsonMap(config.autoscaler, snakeCase);
      if (config.autoscaler?.pluginConfig) {
        runner.autoscaler.plugin_config = toJsonMap(
          config.autoscaler.pluginConfig,
          snakeCase,
        );
      }
      if (config.autoscaler?.connectorConfig) {
        runner.autoscaler.connector_config = toJsonMap(
          config.autoscaler.connectorConfig,
          snakeCase,
        );
      }
      if (config?.cache?.s3 && Object.keys(config.cache.s3).length) {
        runner.cache = toJsonMap(config.cache, pascalCase);
        delete runner.cache.S3;
        runner.cache.s3 = toJsonMap(config.cache.s3, pascalCase);
      } else {
        delete runner.cache;
      }
      result.runners.push(runner);
    }

    return filter(result, (item) => !isEmpty(item)) as JsonMap;
  }
}
function pascalCase(s: string): string {
  return s[0].toUpperCase() + camelCase(s).slice(1);
}
/**
 * Transforms configuration objects to JsonMap. Pass an inflector function to transform object keys.
 *
 * @param configuration
 * @param inflector A function to transform the object key
 */
function toJsonMap<T>(
  configuration: T,
  inflector: (s: string) => string,
): JsonMap {
  const result: JsonMap = {};
  for (const key in configuration) {
    const value = configuration[key] as unknown as AnyJson;
    if (value === undefined) {
      continue;
    }
    result[inflector(key)] = value;
  }
  return result;
}

/**
 * Transforms configuration objects to a property array. Pass an inflector function to transform object keys.
 *
 * @param configuration
 * @param inflector A function to transform the object key
 * @example
 * // returns ["foo=bar"]
 * toProperties({foo: "bar", (s) => s});
 */
// function toProperties<T>(configuration: T, inflector: (s: string) => string): string[] {
//   const result = [];
//   for (const key in configuration) {
//     const value = configuration[key] as unknown as AnyJson;
//     if (value === undefined) {
//       continue;
//     }
//     result.push(`${inflector(key)}=${value}`);
//   }

//   return result;
// }

export function isEmpty(subject: AnyJson): boolean {
  if (Array.isArray(subject)) {
    return !subject.length;
  }
  if (typeof subject === "object" && !(subject instanceof Date)) {
    return !Object.keys(subject).length;
  }
  if (subject === undefined) {
    return true;
  }
  if (subject === null) {
    return true;
  }

  return false;
}

export function filter(
  subject: AnyJson,
  predicate: (value: AnyJson) => boolean,
): AnyJson {
  if (Array.isArray(subject)) {
    const result: Array<AnyJson> = [];

    subject.forEach((element: AnyJson): void => {
      const filtered = filter(element, predicate);

      if (predicate.call(subject, filtered)) {
        result.push(filtered);
      }
    });

    return result as JsonArray;
  }

  if (typeof subject === "object" && !(subject instanceof Date)) {
    const result: JsonMap = {};

    for (const key in subject) {
      const value: AnyJson = subject[key];
      const filtered = filter(value, predicate);

      if (predicate.call(subject, filtered)) {
        result[key] = filtered;
      }
    }

    return result;
  }

  return subject;
}
