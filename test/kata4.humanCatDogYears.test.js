const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
    it("returns an array",  () => {
        const total = humanCatDogYears()
        expect(Array.isArray(total)).toBe(true);
    })
    it("returns human, cat and dog years", () => {
        expect(humanCatDogYears(10)).toStrictEqual([10, 56, 64]);
    })
})

// Look Ma, no handlebars!!!
//returns an array with three elements
//returns the correct numbers - example tests