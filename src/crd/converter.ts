import { V1CustomResourceDefinition } from "@kubernetes/client-node";
import { noCase } from "change-case";
import { CustomResourceDefinitionOptions, FieldData } from "./decorators";

export function convert<T extends Function>(classToConvert: T): V1CustomResourceDefinition {
  const config = Reflect.getMetadata("crd:config", classToConvert) as CustomResourceDefinitionOptions;
  const fields = Reflect.getMetadata("crd:fields", classToConvert) as FieldData[] ?? [];

  const spec = new Map<string, {type: string}>();

  for (const field of fields) {
    spec.set(field.name, {
      type: field.type,
    });
  }

  // An helper to convert our map into an object (damn I love javascript for its stupidity sometimes)
  let obj = Array.from(spec).reduce((obj, [key, value]) => (
    Object.assign(obj, { [key]: value }) // Be careful! Maps can have non-String keys; object literals can't.
  ), {});

  const singular = noCase(classToConvert.name, {delimiter: ""});
  const plural = singular + "s";

  return {
    metadata: {
      name: `${plural}.${config.group}`
    },
    spec: {
      group: config.group,
      versions: [{
        name: "v1",
        served: true,
        storage: true,
        schema: {
          openAPIV3Schema: {
            type: "object",
            properties: {
              spec: obj
            }
          }
        }
      }],
      scope: config.scope,
      names: {
        singular,
        plural,
        kind: classToConvert.name,
        shortNames: config.shortNames
      }
    }
  };
}
