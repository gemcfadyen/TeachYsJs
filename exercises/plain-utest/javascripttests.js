"use strict";
module("JavaScript Oddities");
test("you get confusing equalities with '=='", function () {
    ok("100" == 100);
    ok("100.0" == 100);
    ok("100.0" == 100.0);
    equal("100", 100);
});
test("but you avoid confusing equalities with '==='", function () {
	ok(100 === 100);
	ok(100.0 === 100);
	equal(100, 100);
	equal(100.0, 100);
});
test("'void' is an operator", function () {
	var func = void function(){ return 1; };
	equal( func , undefined);
});
test("there are no integers", function () {
	equal(6 / 4, 1.5);
});
test("the string to number conversion function is useless", function () {
	equal( parseInt("5"), 5);
	ok( isNaN(parseInt("aa5")));
	equal( parseInt("66a"), 66);
});

// Add more checks for JS oddities here - see solutions/requirejs-utest/javascripttests.js
// for some more things to explore
