const request = require('supertest');
const { logger } = require('../config');

var getTest = (app) => {
    const script_ids = 'test,cadc2a50-fc5b-11e8-a717-7fdfb1a25a47';

    request(app)
        .get('/api/v1/script?script_ids=' + script_ids)
        .expect('Content-Type', /json/)
        .expect(200)
        .end( (err, res) => {
            logger.log({
                level: err ? 'error': 'info',
                message: {
                    err: err || 'null',
                    res: res
                }
            });
        });
}


module.exports = [
    getTest
];

