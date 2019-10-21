const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
 
  const employees = [{
    name:'Jenny', role:'Retail monkey'
  }, {
    name:'Maisie', role:'Freelance monkey'
  }, {
    name:'Beth', role:'Gym monkey'
  }, {
    name:'Hammond', role:'Lab monkey'
  }, {
    name:'Andrew', role:'Insurance monkey'
}, {
  name:'Jamie', role:'Digital monkey'
}];
  it("returns the employee's role in the company", () => {
    expect(getEmployerRole('Jenny', employees)).toBe('Retail monkey');
    expect(getEmployerRole('Hammond', employees)).toBe('Lab monkey');
  });
});
