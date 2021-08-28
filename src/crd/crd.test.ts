/**
 * Integration testing to see if base class, decorators works properly together.
 */

import { CRD, Group } from ".";

@Group("test.com")
class TestCRD extends CRD {}

describe("CRD", () => {
  const testCrd = new TestCRD();

  it("should have the correct group", () => {
    expect(testCrd.getGroup()).toBe("test.com");
  });
});
