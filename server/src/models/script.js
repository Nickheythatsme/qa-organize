const { tablesAtStart, ddb, s3 } = require('../../db');
const { logger } = require('../../config');
const { check, validationResult } = require('express-validator');
const uuidv1 = require('uuid/v1');

const script_table_name = 'qa-organize-scripts';

// Define the table
var params = {
    AttributeDefinitions: [
        {
            AttributeName: 'script_id',
            AttributeType: 'S'
        },
    ],
    KeySchema: [
        {
            AttributeName: 'script_id',
            KeyType: 'HASH'
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    },
    TableName: script_table_name,
    StreamSpecification: {
        StreamEnabled: false
    }
};

tablesAtStart.then(data => {
    if (!data.TableNames) return;
    for (let i=0; i<data.TableNames.length; ++i) {
        if (data.TableNames[i] == script_table_name) {
            logger.info('table already exists: ' + script_table_name);
            return;
        }
    }
})

function createTable() {
    ddb.createTable(params, function(err, data) {
        if (err) {
            logger.error("Error making table: ", err);
        } else {
            logger.info("Table created: " + data);
        }
    });
}

var create = (item) => {
    return new Promise((resolve, reject) => {
        ddb.updateItem({
            TableName: script_table_name,
            ExpressionAttributeNames: {
                "#I":"instruction",
                "#E":"expected"
            },
            Key: {
                script_id: {
                    S: uuidv1(),
                }
            },
            ExpressionAttributeValues: {
                ":i": {
                    S: "Push the red button"
                }, 
                ":e": {
                    S: "The screen changes to red"
                }
            },
            UpdateExpression: "SET #I = :i, #E = :e",
            ReturnValues: "ALL_NEW", 
        }, (err, data) => {
            if (err) {
                reject(err);
            } else {
                logger.info({createdObject:data});
                resolve(data);
            }
        });
    }) 
}

var _delete = (req) => {

}

var get = (req) => {
    // TODO validate
    const Keys = [];
    const ids = req.script_ids.split(',');
    for (let i=0; i<ids.length; ++i) {
        Keys.push({
            script_id:{
                S:ids[i]
            }
        });
    }

    const params = {
        RequestItems: {
            "qa-organize-scripts": {
                Keys:Keys
            }
        }
    }

    return new Promise( (resolve, reject) => {
        logger.info({query:'scripts::batchGetItem',params});
        ddb.batchGetItem(params, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    });
}

module.exports = {
    create,
    get,
    delete: _delete
}

