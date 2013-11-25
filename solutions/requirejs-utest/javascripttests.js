"use strict";
define([], function () {
    var run = function () {
        module("JavaScript Oddities");
        test("you get confusing equalities with '=='", function () {
            ok("100" == 100);
            equal("100", 100);
        });
        test("but you avoid confusing equalities with '==='", function () {
            ok(!("100" === 100));
            deepEqual(100, 100);
        });
        test("'void' is an operator", function () {
            equal(void 123, undefined);
            equal(void
                function () {
                    a: '100'
                }, undefined);
            ok(function () {
                a: '100'
            });
        });
        test("scoping is at function level", function () {
            var a = 100;
            if (true) {
                var a = 200;
            }
            equal(a, 200);
        });
        test("functions are hoisted", function () {
            equal("f1", f1());

            function f1() {
                return "f1";
            }
        });
        test("but function values are not hoisted", function () {
            equal(f1, undefined);
            var f1 = function () {
                return "f1";
            }
        });
        test("there are no integers", function () {
            equal(10 / 4, 2.5);
        });
        test("null is an object", function () {
            equal(typeof null, "object");
        });
        test("the string to number conversion function is useless", function () {
            equal(parseInt("123%45", 10), 123);
            equal(parseInt("123.45", 10), 123);
        });
        test("floating point numbers may surprise", function () {
            notEqual(0.2 + 0.1, 0.3);
            ok(0.2 + 0.1 > 0.3 && 0.2 + 0.1 < 0.3000000001);
        });
        test("NaN is a bit like SQL's null", function () {
            ok(!(NaN === NaN));
            ok(NaN !== NaN);
            ok(isNaN(NaN));
            ok(isNaN('abc'));
            ok(!isNaN(0));
        });
        test("a range of values are equivalent to false ('falsy' values)", function() {
            ok(!(""));
            ok(!(0)) ;
            ok(!(NaN)) ;
            ok(!(null)) ;
            ok(!(undefined)) ;
        }) ;
        test("Functions need to be called explicitly", function () {
            var f1 = function () {
                return false;
            };
            ok(f1);            // Checks value of f1, doesn't call it
            ok(f1() == false); // Calls f1 and checks return value
        });
        test("Arrays are just objects (maps)", function () {
            var colours = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];
            equal(typeof colours, 'object');
            var keys = [];
            for (var idx in colours) {
                if (colours.hasOwnProperty(idx)) {
                    keys.push(idx);
                }
            }
            equal(keys.length, 7);
            equal(keys[0], '0');
            equal(keys[3], '3');
        });

    };
    return {
        run: run
    }
});
