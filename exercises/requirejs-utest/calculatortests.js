define(['js/calcmodule'], function (calc) {
    "use strict";
    var run = function () {
        module("The Calculator");
        test("must add two simple numbers correctly", function () {
            equal(calc.add(4, 2), 6);
        });
        // more tests here
    };
    return {
        run: run
    }
});