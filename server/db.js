// Load the SDK and UUID
const AWS = require('aws-sdk');
const uuid = require('uuid');
const { logger } = require('./config');

// Config AWS credentials
const credentials = new AWS.SharedIniFileCredentials({profile:'default'});
AWS.config.update({region: process.env.AWS_REGION || 'us-west-2'});
AWS.config.credentials = credentials;

// Create S3 service object
var s3 = new AWS.S3({apiVersion: '2006-03-01'});
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
var ddbDoc = new AWS.DynamoDB.DocumentClient();


var getTables = () => {
    return new Promise((resolve, reject) => {
        ddb.listTables({}, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data);
            }
        });
    });
}

var tablesAtStart = getTables();
tablesAtStart.catch(err => {
    logger.error({location:'retrieving tables at start',error:err});
});

module.exports = {
    tablesAtStart,
    ddb,
    ddbDoc,
    s3
}
