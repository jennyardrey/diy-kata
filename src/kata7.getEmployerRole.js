const getEmployerRole = (employeeName, employees) => {
    
    
    // const people = employees;
    // console.log(people)
    let person = employees.filter(e =>e.name === employeeName);
    let realPerson = person[0];
    return realPerson.role;
};

module.exports = getEmployerRole;





