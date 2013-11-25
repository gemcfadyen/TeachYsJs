    "use strict";
    var calc 
    module("The Calculator", {
        setup : function() {
            calc = new Calculator() ;
        }
    });
    test("must add two simple numbers correctly", function () {
        equal(calc.add(4, 2), 6);
    });
    test("must subtract two simple numbers correctly", function () {
        equal(calc.subtract(10, 2), 8);
    });
    test("must subtract two numbers with a negative result correctly", function () {
        equal(calc.subtract(10, 12), -2);
    });
    test("must multiply two simple numbers correctly", function () {
        equal(calc.multiply(10, 2), 20);
    });
    test("must divide two simple numbers with no remainder correctly", function () {
        equal(calc.divide(36, 3), 12);
    });
    test("must divide two numbers with a remainder correctly", function () {
        equal(calc.divide(25, 2), 12.5);
    });