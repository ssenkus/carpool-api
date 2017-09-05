var chai = require('chai');
chai.config.includeStack = true;
chai.config.truncateThreshold = 10000;

var wrappedChai = {
    chai : chai,
    assert: chai.assert,
    should: chai.should,
    expect: chai.expect
};

// this allows a node error object to be passed as the second argument to 'ok', and it's stack with be printed
var oldAssertOk = chai.assert.ok;
wrappedChai.assert.ok = function () {
    if (arguments[1]){
        if (arguments[1].stack) {
            arguments[1] = arguments[1].stack;
        } else if (arguments[1].message) {
            arguments[1] = arguments[1].message;
        }
    }
    oldAssertOk.apply(this, arguments);
};

module.exports = wrappedChai;