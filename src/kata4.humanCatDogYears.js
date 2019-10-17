const humanCatDogYears = number => {
    let arr = [];
    const catYears = (24) + (4*(number-2));
    const dogYears = (24) + (5*(number-2));
arr = [number, catYears, dogYears];
return arr;
};

module.exports = humanCatDogYears;

//cat years = number + 15, number + 9, number + (4*(number-2))
//dog years = number + 15, number +9, number + (5*(number-2))