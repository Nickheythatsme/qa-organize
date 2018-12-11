const { PORT, logger } = require('./config');
const api = require('./src/router');
const path = require('path');

var express = require('express');
var app = express();

app.use('/', express.static(path.join(__dirname, 'public/qa-organize')));

// Log every interaction with server
app.use((req, res, next) => {
    const message = {
        cookies: req.cookies,
        ip: req.ip,
        method: req.method,
        params: req.params,
        path: req.baseUrl,
    }
    logger.info(message);
    next();
});

// attach the api
app.use('/api/v1', api);

console.log('listening at on port: ' + PORT);
app.listen(PORT);

