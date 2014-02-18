

var Difference = module.exports = function difference(a, b) {
    if (b.length > a.length) {
        var tmp = a;
        a = b;
        b = tmp;
    }

    var o_a = {};
    var o_b = {};

    a.map(function(v) {
        o_a[v] = v;
    })

    b.map(function(v) {
        o_b[v] = v;
    });

    var result = [];
    for (var key in o_b) {
        if (o_a[key] === undefined) result.push(o_b[key]);
    }
    for (var key in o_a) {
        if (o_b[key] === undefined) result.push(o_a[key]);
    }
    return result;
}