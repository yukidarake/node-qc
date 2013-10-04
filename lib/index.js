var eaw = require('eastasianwidth');
var qc = exports;

function width(s) {
    var w = 0;
    for (var i = 0; i < s.length; i++) {
        w += eaw.characterLength(s[i]);
    }
    return w;
}

function repeat(s, n) {
    return new Array(n + 1).join(s);
}

function wrap(s, br) {
    br = br || '\n';

    var l = Math.ceil(width(s) / 2) + 2;

    return [
        '＿' + repeat('人', l) + '＿',
        '＞　' + s + '　＜',
        '￣' + repeat('Y^', l - 1) + '￣',
    ].join(br);
}

qc.wrap = wrap;

qc.print = function(s, br) {
    console.log(wrap(s, br));
};

