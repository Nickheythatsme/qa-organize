const PORT = process.env.PORT;
const { makeRequest } = require('./request');

// test get script
var getOptions = {
    testName:'get script',
    host:'127.0.0.1',
    port: PORT,
    timeout:1000, // timeout 1 second since it should be very fast
    method:'GET',
    path:'/api/v1/script?script_ids=test,test2&',
}

// test create script
var createData = JSON.stringify({
    'scipt_id':'test2',
    'instruction':'touch the button!',
    'expected':'the button turns red'
});

var createOptions = {
    testName:'create script',
    hostname:'localhost',
    port: PORT,
    timeout:1000, // timeout 1 second since it should be very fast
    method: 'PUT',
    headers: {
        'Content-Type':'application/x-www-form-urlencoded',
        'Content-Length':Buffer.byteLength(createData)
    },
    path:'/api/v1/script/',
}


module.exports = [
    () => makeRequest(getOptions),
    () => makeRequest(createOptions, createData),
];