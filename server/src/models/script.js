var { tablesAtStart, ddb, s3 } = require('../../db');
var { logging } = require('../../config');

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

// Handle post to the script
var post = (req) => {
    // TODO handle post
}

var create = (req) => {
    // TODO handle create new script
}

var get = (req) => {
    // TODO handle create get 
}

module.exports = {

}

