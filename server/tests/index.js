var scriptTests = require('./script');

var runTests = function() {
    _runTests(0);
}

var _runTests = function(index) {
    if (index >= scriptTests.length) {
        return;
    }
    setTimeout(() => {
        scriptTests[index]();
        _runTests(++index);
    }, 100);
}

// module.exports = runTests;

runTests();
