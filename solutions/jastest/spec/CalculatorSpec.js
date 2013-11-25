describe("Calculation Suite", function () {
    "use strict";
    var calc = new Calculator();

    it("should add two simple numbers correctly", function () {
        expect(calc.add(4, 2)).toBe(6);
    });
    it("should subtract two simple numbers correctly", function () {
        expect(calc.subtract(10, 2)).toBe(8);
    });
    it("should subtract two numbers with a negative result correctly", function () {
        expect(calc.subtract(10, 12)).toBe(-2);
    });
    it("should multiply two simple numbers correctly", function () {
        expect(calc.multiply(10, 2)).toBe(20);
    });
    it("should divide two simple numbers with no remainder correctly", function () {
        expect(calc.divide(36, 3)).toBe(12);
    });
    it("should divide two numbers with a remainder correctly", function () {
        expect(calc.divide(25, 2)).toBe(12.5);
    });
});