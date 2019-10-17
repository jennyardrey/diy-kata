const { reachDestination } = require("../src");

describe("reachDestination", () => {
  const result = reachDestination();
  it("returns string", () => {
    expect(typeof result).toBe('string');
  });
  it("returns the arrival time", () => {
    expect(reachDestination(44, 10)).toBe('I should be there in 4.5 hours.');
  });
});
