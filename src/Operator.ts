import { EventEmitter } from "events";
import * as k8s from "@kubernetes/client-node";
import { convert } from "./crd/converter";

export class Operator extends EventEmitter {
  private kc: k8s.KubeConfig;

  constructor() {
    super();
    this.kc = new k8s.KubeConfig();
    this.kc.loadFromDefault();

    /*const api = this.kc.makeApiClient(k8s.CustomObjectsApi);
    const res = api.createClusterCustomObject("test.com", "v1", "testobjects", {
      type: "object",
      properties: {
        spec: {
          title: {
            type: "string"
          }
        }
      }
    }, "true", "All");
    res.then(console.log).catch(console.error);*/
  }

  public registerCRD<T extends Function>(crdClass: T) {
    const api = this.kc.makeApiClient(k8s.ApiextensionsV1Api);
    const res = api.createCustomResourceDefinition(convert(crdClass));
    res.then(console.log).catch(console.error);
  }
};
