"use strict";

// This module is the glue between QUnit and RequireJS because QUnit doesn't
// directly support the AMD module system that RequireJS implements and so
// the unit tests have to be explicitly "booted" via RequireJS.
// This approach is based on Nathan Davison's examples on his blog:
// http://www.nathandavison.com/article/17/using-qunit-and-requirejs-to-build-modular-unit-tests

// This is a RequireJS "data-main" bootstrap file

// The RequireJS configuration to allow QUnit to be found but also 
require.config({
    
    paths: {
        'QUnit': '../lib/qunit-1.12.0/qunit'
    },
    // QUnit unfortunately isn't an AMD module and so the RequireJS
    // "shim" property is used to make it look like one and tell
    // QUnit how to behave when it is loaded
    shim: {
       'QUnit': {
           exports: 'QUnit',
           init: function() {
               QUnit.config.autoload = false;
               QUnit.config.autostart = false;
           }
       } 
    }
});

// Tell RequireJS that we require QUnit and the unit tests
// The function is called by RequireJS once the modules are all
// loaded and so it starts QUnit and then iterates through the other
// arguments (the other modules) and calls each's run() method to run
// its tests.  See requirejs-utest/simpletests.js for a simple example
// of how the run() method is created.
require(
    ['QUnit',   "requirejs-utest/simpletests", 
                "requirejs-utest/calculatortests"],
    function(QUnit) {
        // start QUnit.
        QUnit.load();
        QUnit.start();
        // run the tests.
        for (var i=1; i < arguments.length; i++) {
            arguments[i].run() ;
        }
    }
);
