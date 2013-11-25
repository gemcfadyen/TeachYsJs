describe("JavaScript can be confusing because", function () {
    "use strict";
    
    it("you get confusing equalities with '=='", function () {
        expect("100" == 100).toBe(true);
    });
    it("but you avoid confusing equalities with '==='", function () {
        expect("100" === 100).toBe(false);
    });
    it("'void' is an operator", function () {
        expect(void 123).toBeUndefined;
        expect(void function() {a: '100'}).toBeUndefined;
        expect(function() {a: '100'}).toBeDefined;
    });
    it("scoping is at function level", function () {
        var a = 100;
        if (true) {
            var a = 200 ;
        }
        expect(a).toBe(200) ;
    });
    it("functions are hoisted", function () {
        expect(f1()).toBe("f1");
        function f1() { return "f1" };
    });
    it("but function values are not hoisted", function () {
        expect(f1).toBeUndefined ;
        var f1 = function () { return "f1" };
    });
    it ("there are no integers", function () {
        expect(10 / 4).toBe(2.5) ;
    }) ;
    it ("null is an object", function () {
        expect(typeof null).toBe("object") ;
    }) ;
    it ("the string to number conversion function is useless", function () {
        expect(parseInt("123%45")).toBe(123) ;
        expect(parseInt("123.45")).toBe(123) ;
    }) ;
    it ("floating point numbers may surprise", function () {
        expect(0.2 + 0.1).not.toBe(0.3) ;
        expect(0.2 + 0.1).toBeCloseTo(0.3) ;
    }) ;
    it ("NaN is a bit like SQL's null", function () {
        expect(NaN === NaN).toBe(false) ;
        expect(NaN !== NaN).toBe(true) ;
        expect(isNaN(NaN)).toBeTruthy() ;
        expect(isNaN('abc')).toBeTruthy() ;
        expect(isNaN(0)).toBeFalsy() ;
    }) ;
    it ("Functions need to be called explicitly", function () {
        var f1 = function () { return false; };
        expect(f1).toBeTruthy() ;  // Checks value of f1, doesn't call it
        expect(f1()).toBeFalsy() ; // Calls f1 and checks return value
    }) ;
    it ("Arrays are just objects (maps)", function () {
        var colours = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];
        expect(typeof colours).toBe('object') ;
        var keys = [];
        for(var idx in colours) {
            if (colours.hasOwnProperty(idx)) {
                keys.push(idx) ;
            }
        }
        expect(keys.length).toBe(7) ;
        expect(keys[0]).toBe('0') ;
        expect(keys[3]).toBe('3') ;
    }) ;

});