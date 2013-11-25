define([], function () {
    var Counter = function (initial) {
         if (!(this instanceof Counter)) {
            return new Counter(initial);
        }
        this._value = initial;
        
        this.inc = function() {
            this._value++;
        },
        this.value = function() {
            return this._value;
        }
    };
    var run = function () {
        module("JavaScript examples of") ;
        test("a simple class defined in a constructor", function () {
            var theCounter = new Counter(10) ;
            equal(theCounter.value(), 10) ;
            theCounter.inc() ;
            equal(theCounter.value(), 11) ;
        });
        test("a simple class defined using prototype", function() {
            var AddCalc = function() {} ;
            AddCalc.prototype.add = function(x,y) { return x+y; };
            
            var myCalc = new AddCalc() ;
            equal(myCalc.add(4,5), 9);
        }) ;
        test("class style 'parasitic' inheritance", function() {
            var BidirectionalCounter = function(initial) {
                var that = new Counter(initial)
                that.dec = function() {
                    this._value--;
                }
                return that
            }
            
            var theCounter = new BidirectionalCounter(10) ;
            
            theCounter.inc() ;
            theCounter.inc() ;
            theCounter.dec() ;
            equal(theCounter.value(), 11) ;
        });
        test("class style 'prototype' inheritance", function() {
            var BidirectionalCounter = function(initial){
                this._value = initial
            } ;
            BidirectionalCounter.prototype = new Counter(0) ;
            BidirectionalCounter.prototype.dec = function() {
                this._value--;
            }

            var theCounter = new BidirectionalCounter(-5) ;
            theCounter.dec() ;
            theCounter.dec() ;
            theCounter.inc();
            equal(theCounter.value(), -6)
            
            equal(1,1);
        });
        test("array extension", function() {
            Array.prototype.upper = function() {
                for (var idx=0; idx < this.length; idx++) {
                    this[idx] = this[idx].toUpperCase() ;
                }
                return this
            }
            try {
                var vowels = ["a", "e", "i", "o", "u"] ;
                var VOWELS = ["A", "E", "I", "O", "U"] ;
                deepEqual(vowels.upper(), VOWELS) ;
            } finally {
                delete Array.prototype.upper ;
            }
        });
    };
    return {
        run: run
    }
});