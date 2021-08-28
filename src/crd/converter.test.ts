import { convert } from "./converter";
import { CustomResourceDefinition, Field } from "./decorators";

@CustomResourceDefinition({
  group: "test.com",
  scope: "Namespaced"
})
export class TestRessource {
  @Field("string")
  public title?: string;
}

describe("converter", () => {
  it("should convert the class to CRD", () => {
    const output = convert(TestRessource);

    expect(output).toStrictEqual({
      metadata: {
        name: "testressources.test.com"
      },
      spec: {
        group: "test.com",
        versions: [{
          name: "v1",
          served: true,
          storage: true,
          schema: {
            openAPIV3Schema: {
              type: "object",
              properties: {
                spec: {
                  type: "object",
                  properties: {
                    title: {
                      type: "string"
                    }
                  }
                }
              }
            }
          }
        }],
        scope: "Namespaced",
        names: {
          singular: "testressource",
          plural: "testressources",
          kind: "TestRessource",
          shortNames: undefined
        }
      }
    });
  });
});
