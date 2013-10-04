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

    var w = width(s);

    if (w % 2) {
        s = s + ' ';
        w++;
    }

    var l = w / 2 + 2;

    return [
        '＿' + repeat('人', l) + '＿',
        '＞  ' + s + '  ＜',
        '￣' + repeat('Y^', l) + '￣',
    ].join(br);
}

qc.wrap = wrap;

qc.print = function(s, br) {
    console.log(wrap(s, br));
};

