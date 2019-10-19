const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  const result = getEmployerRole();
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
  xit("returns the employee's role in the company", () => {
    expect(getEmployerRole(employees)).toBe('Retail monkey');
    expect(result).toBe('Lab monkey');
  });
});
