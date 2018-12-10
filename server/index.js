const { PORT, logger } = require('./config');
const { ddb, s3 } = require('./db');
const router = require('./src/router');
const path = require('path');

var express = require('express');
var app = express();

// TODO Serve the web-app
app.use('/', express.static(path.join(__dirname, 'public/qa-organize')));

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