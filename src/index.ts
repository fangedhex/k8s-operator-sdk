import { noCase } from "change-case";

console.log(noCase("HelloWorld", {delimiter: ""}));

/*import * as k8s from "@kubernetes/client-node";

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

//k8s.V1CustomResourceDefinition

k8sApi.listPodForAllNamespaces().then((res) => {
  console.log(res.body);
});

import * as jsYaml from "js-yaml";

const obj = {
  test: "value",
  arr: [1,2,3],
};

console.log(jsYaml.dump(obj));*/
