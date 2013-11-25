//
// calcmodule.js - a module providing a calculator that wraps the calculator implementation
//
define(["js/calculator"], function () {
    "use strict";
    var calc = new Calculator();
    
    function reset() {
        calc = new Calculator();
    }
    
    return {
        add : calc.add,
        //more exported functions here
        reset : reset
    };
});