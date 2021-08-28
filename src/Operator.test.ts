import { CustomResourceDefinition, Field } from "./crd/decorators";
import { Operator } from "./operator";

@CustomResourceDefinition({
  group: "test.com",
  scope: "Namespaced"
})
export class TestRessource {
  @Field("string")
  public title?: string;
}

class TestOperator extends Operator {
  constructor() {
    super();
    this.registerCRD(TestRessource);
  }
}

describe("Operator", () => {
  it("should register CustomResourceDefinition", () => {
    const operator = new Operator();
    operator.registerCRD(TestRessource);
    expect(true).toBe(false);
  });
});
