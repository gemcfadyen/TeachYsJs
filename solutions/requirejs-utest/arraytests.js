define([], function () {
    var run = function () {
        module("JavaScript arrays");
        test("are easily declared", function () {
            var a = [];
            equal(a.length, 0);
            var b = [1, 2, 3]
            equal(b.length, 3)
            var c = Array("a", "b", "c", "d");
            equal(c.length, 4)
        });
        test("can be sparse", function () {
            var a = []
            a[0] = 0
            a[2] = 2
            equal(a.length, 3)
            equal(a[0], 0)
            equal(a[1], undefined)
        });
        test("can have items deleted without changing length", function () {
            var a = [1, 2, 3]
            delete a[1]
            equal(a.length, 3)
            equal(a[0], 1)
            equal(a[1], undefined)
        });
        test("can hold anything", function () {
            var a = [1, "hello",
                    function () {
                    return 1
                    }, [1, 2, 3]]
            equal(a[0], 1);
            equal(a[1], "hello");
            equal(a[2](), 1);
            equal(a[3].length, 3);
            equal(a[3][1], 2);
        });
        test("have a mutable length property", function () {
            var a = []
            equal(a.length, 0);
            a.length = 5;
            equal(a.length, 5);
            equal(a[4], undefined);
        });
        test("can act as stacks", function () {
            var a = []
            a.push(1);
            a.push(2);
            equal(a.length, 2);
            equal(a.pop(), 2);
            equal(a.length, 1);
        });
        test("can act as queues", function () {
            var a = []
            a.unshift(1, 2); // a === [1,2]
            a.unshift(3); // a === [3,1,2]
            equal(a.length, 3);
            equal(a.shift(), 3); // a === [1,2]
            equal(a.length, 2);
        });
        test("have a powerful splice() method", function () {
            var a = [1, 2, 3, 4, 5]
            var b = a.splice(2) // Remove elements from index 2 onwards
            deepEqual(b, [3, 4, 5])
            deepEqual(a, [1, 2]);
            a = [1, 2, 3, 4, 5]
            var c = a.splice(2, 1) // Remove 1 element at index 2
            deepEqual(c, [3]);
            deepEqual(a, [1, 2, 4, 5]);
            a = [1, 2, 3, 4, 5]
            a.splice(2, 1, 101, 102, 103); // Insert the three elements 100, 101, 102 to replace item at index 2
            deepEqual(a, [1, 2, 101, 102, 103, 4, 5]);
        });
        test("can be concatenated", function () {
            deepEqual([1, 2, 3], [1].concat([2, 3]));
        });
        test("can be filtered", function () {
            deepEqual([1, 3, 5], [1, 2, 3, 4, 5, 6].filter(function (i) {
                return i % 2 !== 0
            }));
        });
        test("can be joined into a string", function () {
            equal("1|2|3", [1, 2, 3].join("|"));
        });
        test("can be searched", function () {
            equal([1, 2, 3].indexOf(2), 1);
        });
        test("offer a map method", function () {
            deepEqual([1, 2, 3].map(function (x) {
                return x * 2;
            }), [2, 4, 6]);
        });
        test("can be reversed", function () {
            deepEqual([1, 2, 3].reverse(), [3, 2, 1]);
        });
        test("can be sliced up", function () {
            deepEqual([1, 2, 3, 4, 5].slice(3), [4, 5]);
            deepEqual([1, 2, 3, 4, 5].slice(1, 4), [2, 3, 4]);
        });
        test("can be sorted", function () {
            deepEqual([4, 2, 8, 6].sort(), [2, 4, 6, 8]);
            deepEqual([4, 2, 8, 6].sort(function (a, b) {
                return b - a
            }), [8, 6, 4, 2]);
        });
        test("can be extended using JavaScript's prototype mechanism", function () {
            Array.prototype.timesBy = function (multiplier) {
                return this.map(function (x) {
                    return x * multiplier;
                });
            }
            deepEqual([1, 2, 3].timesBy(2), [2, 4, 6]);
            delete Array.prototype.timesBy ;
        });
        test("are really just maps and so can be processed using for-in", function () {
            var str = ""
            var a = ["zero", "one", "two"];
            for (var i in a) {
                str += i + '=' + a[i] + ' ';
            }
            equal(str, "0=zero 1=one 2=two ");
        });
    };
    return {
        run: run
    }
});