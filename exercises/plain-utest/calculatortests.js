    "use strict";
    var calc 
    module("The Calculator", {
        setup : function() {
            calc = new Calculator() ;
        }
    });
   
    test("must add two simple numbers correctly", function () {
        equal(calc.add(4, 2), 6);
        equal(calc.add(2.5, 2.5), 5);
        equal(calc.add(0.3, 0.3), 0.6);
         
    });

    test("must divide two numbers correctly", function(){
        equal(calc.divide(5, 2), 2.5);
        equal(calc.divide(1, 0), Infinity);
    });
