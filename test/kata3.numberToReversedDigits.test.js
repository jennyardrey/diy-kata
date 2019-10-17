const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns an array", () => {
    const result = numberToReversedDigits()
    expect(Array.isArray(result)).toBe(true);
  });
  it("returns the reverse of the number", () => {
    expect(numberToReversedDigits(1234)).toEqual([4, 3, 2, 1])
    
  })
});
