const { PORT, logger } = require('./config');
const runTests = require('./tests/index');
const api = require('./src/router');
const path = require('path');

var express = require('express');
var app = express();

// attach the api
app.use('/api/v1', api);

logger.log({
    level: 'info',
    message: 'starting tests'
});

runTests(app);

