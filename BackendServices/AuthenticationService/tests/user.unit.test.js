const addTwoNumbers = require("../utils/add-two-numbers.js");

test("Returns the sum of two numbers", () => {
    expect(addTwoNumbers(1, 2)).toBe(3);
});
