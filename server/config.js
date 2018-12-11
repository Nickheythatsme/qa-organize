const winston = require('winston');
const { format } = winston;

const loggerFormat = winston.format.printf(info => {
    const message = {
        level: info.level,
        message: info.message,
        timestamp: info.timestamp,
    }
    if (info.label) {
        message.label = info.label;
    }
    return JSON.stringify(message);
});

const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console(),
    ],
    format: format.combine(
        format.timestamp(),
        loggerFormat
    )
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