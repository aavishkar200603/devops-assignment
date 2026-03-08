const { add, subtract, multiply, divide } = require("./calculator");

test("addition works correctly", () => {
    expect(add(2,3)).toBe(5);
});

test("subtraction works correctly", () => {
    expect(subtract(5,2)).toBe(3);
});

test("multiplication works correctly", () => {
    expect(multiply(3,4)).toBe(12);
});

test("division works correctly", () => {
    expect(divide(10,2)).toBe(5);
});