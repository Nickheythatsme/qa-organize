var scriptTests = require('./script');

var runTests = function(app) {
    _runTests(0, app);
}

var _runTests = function(index, app) {
    if (index >= scriptTests.length) {
        return;
    }
    setTimeout(() => {
        scriptTests[index](app);
        _runTests(++index);
    }, 100);
}

module.exports = runTests;

