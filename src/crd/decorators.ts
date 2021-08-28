/// <reference types="reflect-metadata" />

import { CRD } from "./CRD";

export interface CustomResourceDefinitionOptions {
  group: string;
  scope: "Namespaced" | "Cluster";
  shortNames?: string[];
}

export interface FieldData {
  name: string;
  type: string;
}

export function CustomResourceDefinition(options: CustomResourceDefinitionOptions) {
  return function<T extends Function>(target: T) {
    Reflect.defineMetadata("crd:config", options, target);
  };
}

export function Group(name: string) {
  return function<T extends { new (...args: any[]): CRD }>(constructor: T) {
    return class extends constructor {
      group = name;
    }
  }
}

export function Field(type: string) {
  return function(target: Object, property: string) {
    const list: FieldData[] = Reflect.getMetadata("crd:fields", target) as FieldData[] ?? [];

    list.push({
      name: property,
      type
    });

    Reflect.defineMetadata("crd:fields", list, target.constructor);
  };
}
