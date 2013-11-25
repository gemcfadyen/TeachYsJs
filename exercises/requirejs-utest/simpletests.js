"use strict";

// This is a QUnit test, packaged as an AMD module (to be loaded via RequireJS)
// The define() function is part of RequireJS and allows the dependencies of
// the module to be defined (the empty array in this case) and provides a function
// that encapsulates the module and that RequireJS executes in order to get
// the module's external interface.  In this case the interface is a single
// function called run() which runs the tests - this is used by requirejs-utestmain.
define([], function () {    
    var run = function () {
        // QUnit tests
        module("Simple test");
        test("proves that adding numbers works", function () {
            equal(10+20, 30);
        });
        test("proves that subtracting numbers works", function () {
            equal(100-40, 60);
        });
    };
    return {
        run: run
    }
});