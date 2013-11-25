//
// calcmodule.js - a module providing a calculator that wraps the calculator implementation
//
/* global define:true */
define(["js/calculator"], function () {
    "use strict" ;
    var calc = new Calculator();
    
    function reset() {
        calc = new Calculator();
    }
    
    return {
        add : calc.add,
        sub : calc.subtract,
        subtract : calc.subtract,
        mult : calc.multiply,
        multiply : calc.multiply,
        div : calc.divide,
        divide : calc.divide,
        reset : reset
    }
}) ;