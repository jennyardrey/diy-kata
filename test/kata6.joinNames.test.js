const { joinNames } = require("../src");

describe("joinNames", () => {
  /* xit("returns string", () => {
    const result = joinNames();
    expect(typeof result).toBe('string'); */
  // });
  const array = [{
    name: 'Bart'
  }, {
    name: 'Lisa'
  }, {
    name: 'Maggie'
  }];
  const array2 = [{
    name: 'Sandra'
  }, {
    name: 'Brian'
  }, {
    name: 'Jenny'
  },
  { name: 'Beth'
  }];

  test("returns names, seperated by commas and an ampersand", () => {
    expect(joinNames(array)).toBe('Bart, Lisa & Maggie');
    expect(joinNames(array2)).toBe('Sandra, Brian, Jenny & Beth');
  });
});
