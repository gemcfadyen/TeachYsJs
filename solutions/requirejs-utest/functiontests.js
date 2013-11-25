"use strict";
define([], function() {
    var run = function() {
        module("JavaScript Functions") ;
        test("functions are scopes", function() {
            var a = 100
            if (1) {
                var a = 200
            }
            equal(a, 200)
        });
        test("functions are first class", function() {
            var inner = function() { return 10 }
            var outer = function(f) { return 10 + f() }
            equal(outer(inner), 20)
        });
        test("functions can have variable argument lists", function() {
            var addNumbers = function() {
                var total = 0 ;
                for (var i=0; i < arguments.length; i++) {
                    total += arguments[i];
                }
                return total ;
            }
            equal(addNumbers(10,20,30), 60)
            equal(addNumbers(-1, -2, -3, -4, -5), -15)
        });
        test("functions can be recursive", function() {
            function addList(numList) {
                if (numList.length == 0) {
                    return 0 ;
                } else {
                    return numList[0] + addList(numList.splice(1))
                }
            }
            
            equal(addList([5,10,15,20]), 50);
        });
    };
    return {
        run: run
    }
}) ;