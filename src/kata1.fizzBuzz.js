const fizzBuzz = number => {
    const  div3 = (number%3===0);
    const div5 = (number%5===0)
    if (div5&&div3) {
        return 'FizzBuzz'
    }
    if (div5) {
        return 'Buzz'
    }
    if (div3) {
        return 'Fizz';
    }
    return number;
    
};

module.exports = fizzBuzz;
