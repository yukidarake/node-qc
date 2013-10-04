var qc = require('../lib');

describe('lib/index.js', function() {
    describe('wrap', function() {
        it('マルチバイトだけ', function() {
            qc.wrap('ほげ').should.equal(
                '＿人人人人＿\n' +
                '＞　ほげ　＜\n' +
                '￣Y^Y^Y^￣'
            );
        });

        it('マルチバイトなし', function() {
            qc.wrap('ab12').should.equal(
                '＿人人人人＿\n' +
                '＞　ab12　＜\n' +
                '￣Y^Y^Y^￣'
            );
        });

        it('マルチバイトと混在', function() {
            qc.wrap('ほげ1混在').should.equal(
                '＿人人人人人人人＿\n' +
                '＞　ほげ1混在　＜\n' +
                '￣Y^Y^Y^Y^Y^Y^￣'
            );
        });
    });
});
