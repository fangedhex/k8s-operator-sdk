import { CRD } from "./crd/CRD";
import { CustomResourceDefinition, Field } from "./crd/decorators";
import { CrdHandler } from "./CrdHandler";

@CustomResourceDefinition({
  group: "test.com",
  scope: "Namespaced"
})
class TestRessource extends CRD {
  @Field("string")
  public title?: string;
}

class TestHandler extends CrdHandler<TestRessource> {
}

describe("CrdHandler", () => {
  it("do something", () => {
    const crdHandler = new TestHandler();
  });
});
