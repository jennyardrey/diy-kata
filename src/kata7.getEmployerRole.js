const getEmployerRole = (employeeName, employees) => {
    const people = [employees];
    const person = people.find((e) => e.name === employeeName);
    return person;
};

module.exports = getEmployerRole;
