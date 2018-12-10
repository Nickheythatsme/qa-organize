var { PORT, logger } = require('./config');
var { ddb, s3 } = require('./db');
var router = require('./src/router');

var express = require('express');
var app = express();

// TODO Serve the web-app
app.get('/', function (req, res) {
    res.send('frontend');
});

// Log every interaction with server
app.use((req, res, next) => {
    const message = {
        topic: 'request made',
        cookies: req.cookies,
        ip: req.ip,
        method: req.method,
        params: req.params,
        path: req.path,
    }
    logger.info(JSON.stringify(message));
    next();
});

app.use('/api/v1',router);

logger.info('listening at on port: ' + PORT);
app.listen(PORT);