import { CustomResourceDefinition, Field } from "./decorators";

@CustomResourceDefinition({
  group: "test.com",
  scope: "Namespaced"
})
export class TestRessource {
  @Field("string")
  public title?: string;
}

describe("Decorators", () => {
  it("should correctly set the metadata", () => {
    const keys = Reflect.getMetadataKeys(TestRessource) as string[];
    expect(keys).toContain("crd:config");
    expect(keys).toContain("crd:fields");

    const config = Reflect.getMetadata("crd:config", TestRessource);
    expect(config).toStrictEqual({
      group: "test.com",
      scope: "Namespaced"
    });

    const fields = Reflect.getMetadata("crd:fields", TestRessource);
    expect(fields).toStrictEqual([{
      name: "title",
      type: "string"
    }])
  });
});
