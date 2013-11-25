Teach Yourself JavaScript - Exercises
=====================================

This directory contains incomplete files to guide you through some exercises that explore various useful aspects of JavaScript.

Getting Started
---------------

You need just a couple of things to get started with JavaScript:

* A browser, such as Chrome, with a good JavaScript engine
* Some way to edit JavaScript files such as IntelliJ, [WebStorm](http://www.jetbrains.com/webstorm/),  [Brackets](http://brackets.io/), Emacs or vi.

References
----------

Some useful reading includes:

* [JavaScript User Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
* [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
* [Learning Advanced JavaScript](http://ejohn.org/apps/learn/)
* [Stack Overflow JavaScript Questions](http://stackoverflow.com/questions/tagged/javascript)
* [Doug Crockford's Overview of JavaScript](http://javascript.crockford.com/survey.html)
* [Doug Crockford's JavaScript conventions](http://javascript.crockford.com/code.html)
* [JavaScript the Good Parts on Safari](http://bit.ly/IptYIH)

Create a Calculator
-------------------

We're going to create an almost insultingly simple piece of code - a calculator that can (at least) add, subtract, divide and multiply (although don't be limited by that - add more advanced features if you have time).

The `js/calculator.js` file contains a partial implementation of a calculator and the `plain-utest/calculatortests.js` file contains a failing unit test for the add operation.  Complete these implementations to produce a tested calculator.

To run the unit tests, open the file `qunit-plain-index.html` in a browser.  To understand a bit about how the HTML file drives the tests and the test scaffolding functions (like `test()` and `equal()`) read the [QUnit web site](http://www.qunit.org).

Explore JavaScript Oddities
---------------------------

Open the `qunit-plain-index.html` file in an editor and uncomment the `javascripttests.js` script.  Reload the page in a browser and you will see some more failing tests.

This unit test allows you to explore the varioud oddities of the JavaScript language.  A few example tests have been provided for you to complete.  If you're not sure what to explore, think about some of the language features in the "Bad" and "Awful" appendices of Doug Crawford's _JavaScript the Good Parts_ book (links to the chapters on Safari: http://bit.ly/1g6Ep03 and http://bit.ly/1iFdFpD)

Introducing Modularisation
--------------------------

By now our current JavaScript should be working well, but it's already starting to get complicated and we can see that this is going to be difficult to scale.  There's no reason for the unit test HTML page to combine the calculator and JavaScript test scripts, but that's exactly what it does and if they clashed in some way it wouldn't work.  We need some way of modularising this before we go further.

The best known JavaScript module system is known as AMD (Asynchronous Module Definition) and is the approach we plan to use.  The library that implements the module system for us is [RequireJS](http://www.requirejs.org) and a few AMD related articles worth reading are here:

* http://en.wikipedia.org/wiki/Asynchronous_module_definition
* https://github.com/amdjs/amdjs-api/wiki/AMD
* http://requirejs.org/docs/whyamd.html

We are now going to modularise our project before it gets any bigger.

Modularisation with RequireJS
-----------------------------

The absolute essentials of RequireJS can be found here: http://requirejs.org/docs/start.html

The key points are that:

* JavaScript files are turned into RequireJS modules by enclosing their content in the RequireJS function `define()` which allows the script's dependencies to be listed as well as the function that provides its content to be defined.
* The `define()` function must return a JS object which provides the public interface to the module (i.e. a map of functions)
* RequireJS works by including a special `<script>` tag in the main HTML file of the form `<script data-main="mymainscript" src="scripts/require.js"></script>` where `mymainscript` is the application's RequireJS boot script (less the ".js" suffix) and `scripts/require.js` is the location of the RequireJS library.

We now want to modularise the code we have, before we add more.

* Look in the `qunit-requirejs-index.html` HTML file, this is the test driver for QUnit tests that use RequireJS to modularise the tests and code.  Note how the lists of tests and code under test have vanished and been replaced with a single `<script>` tag that starts RequireJS.
* Look in the `requirejs-utestmain.js` file, this is the RequireJS bootstrap script and contains the magic glue code needed to test RequireJS modules with QTest.  It also shows a little more of how RequireJS can be configured (in the `require.config` block).  The list of tests to run is specified in the array on line 38 and 39.  The function iterates through this list of dependencies and calls the `run()` method of each.
* Look in the `requirejs-utest/simpletests.js` file, this is a simple unit test packaged as an AMD module.  The key points are that the content is wrapped in a function called `define()` which returns a map containing a single function called `run` which will be called to run the tests.
* Create a new JavaScript file to create your calculator module and in it, create a RequireJS module that wraps your calculator class.  You can specify the calculator you created earler as a module dependency and have your module wrap an instance of it.  The `calcmodule.js` file contains a skeleton module to work from.
* Add some more unit tests in other modules and have them run as part of the test set (by modifying `requirejs-utestmain.js` to run them).  Use unit tests to explore some further aspects of JavaScript (some examples can be found in the `solutions` directory).
    * Write some tests for JavaScript arrays: http://www.hunlock.com/blogs/Mastering_Javascript_Arrays.  Try to use some of the interesting array functions such as `slice()`, `forEach()` and `map()`.
    * Write some tests to explore JavaScript functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function.  Investigate recursion, argument list handling and how scoping and functions interact.
    * Write some tests to investigate JavaScript "classes" and inheritance: http://www.phpied.com/3-ways-to-define-a-javascript-class/

If you'd like to investigate further, add your own module to keep a history of calculations in the calculator, unit test it and then use RequireJS to inject it into the calculator to use it.

