const assert = require("assert").strict;
const { add } = require("./add");
describe("Math add function", () => {
  it("should add two positive numbers", () => {
    assert.equal(5, add(2, 3));
  });
  it("should throw an exception", () => {
    try {
      const result = add("hello", 3);
    } catch (error) {
      assert.equal(error.message, "should be a number");
    }
  });
});
