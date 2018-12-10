const winston = require('winston');

// TODO add time to configuration
const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console(),
    ],
});

if (process.env.PRODUCTION) {
    // TODO add rotating logs
    logger.transports.push(
        new winston.transports.File({ filename: 'server-' + new Date() + '.log' }),
    );
}

const PORT = process.env.PORT || 3000;

module.exports = {
    logger,
    PORT
}