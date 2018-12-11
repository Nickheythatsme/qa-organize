const { tablesAtStart, ddb, ddbDoc, s3 } = require('../../db');
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

// If the table already exists, don't try to make another
tablesAtStart.then(data => {
    if (!data.TableNames) return;
    for (let i=0; i<data.TableNames.length; ++i) {
        if (data.TableNames[i] == script_table_name) {
            logger.info('table already exists: ' + script_table_name);
            return;
        }
    }
    logger.info({creating_table:script_table_name});
    createTable();
});

// Make a new table
function createTable() {
    ddb.createTable(params, function(err, data) {
        if (err) {
            logger.error("Error making table: ", err);
        } else {
            logger.info("Table created: " + data);
        }
    });
}

// Create a new script
var create = (item) => {
    var params = {
        Item: {
            script_id: (new uuidv1()).toString(),
            expected: item.expected,
            instruction: item.instruction,
            outcome:item.outcome,
        },
        TableName: script_table_name,
        ReturnValues:'ALL_OLD',
    }
    return ddbDoc.put(params).promise();
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

