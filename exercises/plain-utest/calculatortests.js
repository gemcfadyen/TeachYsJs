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

    // Add other tests here - take JavaScript's oddities into account
    // (remember it doesn't have an integer type)
