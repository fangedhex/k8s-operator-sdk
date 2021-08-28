import { ApiextensionsV1Api, CustomObjectsApi } from "@kubernetes/client-node";
import { convert } from "./crd/converter";
import { CRD } from "./crd/CRD";

export abstract class CrdHandler<T extends CRD> {
  constructor(/*extensionsApi: ApiextensionsV1Api, crdApi: CustomObjectsApi*/) {
    // We convert the class to CRD like object
    //const converted = convert(T);

    // We ask the extensions api to register our CRD
    //extensionsApi.createCustomResourceDefinition(converted);

    // We list and listen for our CRD change on the cluster
    /*crdApi.listClusterCustomObject(converted.spec.group, "v1", converted.spec.names.plural, undefined, undefined, undefined, undefined, undefined, undefined, undefined, true)
    .then(console.log).catch(console.error);*/
  }

  //public abstract onCreate(): void;
  //public abstract onUpdate(): void;
  //public abstract onDelete(): void;
}
