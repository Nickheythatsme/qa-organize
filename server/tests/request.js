const http = require('http');
var { logger } = require('../config');

var makeRequest = (options, writeData) => {
    var message = {
        test: options.testName,
        path: options.path,
        method: options.method,
        port: options.port
    };
    var req = http.request(options, (res) => {
        message.status = res.statusCode;
        message.url = res.baseUrl;
        // message.headers = res.headers;

        res.setEncoding('utf8');
        let data = "";

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            message.data = data;
            logger.info(message);
        });

        res.on('error', (err) => {
            logger.error({error:err,message:message});
        });
    });
    req.on('error', (err) => {
        logger.error({error:err,error_message:'error making request'});
    });
    if (writeData) {
        req.write(writeData);
    }
    req.end();
}


module.exports = {
    makeRequest
}
