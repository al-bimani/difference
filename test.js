var test = require('tape');
var Difference = require('./index');
var range = require('lazy-range');

test('Using large ranges, we should receive a proper difference', function (t) {
    t.plan(1);
    var res = Difference(range(0,5001), range(3000,7001));

    res.forEach(function(v) {
        if (v > 3000 && v < 5000) {
            t.fail("Failed on: " + v);
        }
    });

    t.ok(true);
});

test('Using predefined set difference should be correct', function (t) {
    t.plan(1);
    var a = [1,2,3,4,'hello', 'world', 5, 6];
    // Please note that currently '7' is === 7 , using the map method, we lose relevance of integers vs strings
    var b = [5,6,'goodbye', 'world', '7', '8'];

    var res = Difference(a, b);
    t.same(res, [ '7', '8', 'goodbye', 1, 2, 3, 4, 'hello' ]);
});