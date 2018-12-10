const http = require('http');
const PORT = process.env.PORT;

// test get script
var getOptions = {
    testName:'get script',
    host:'127.0.0.1',
    port: PORT,
    timeout:1000, // timeout 1 second since it should be very fast
    method:'GET',
    path:'/api/v1/script?script_ids=test,test2&',
}
var testGet = () => {
    console.log(JSON.stringify({test:getOptions}));
    http.get(getOptions, (res) => {
        console.log('STATUS: ' + res.statusCode);
        console.log('URL: ' + res.url);
        console.log('HEADERS:' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        let data = "";

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            console.log('data: ' + data);
        });

        res.on('error', (err) => {
            console.error('error: ' + err);
        });
    });
};

// test create script
var postData = JSON.stringify({
    'scipt_id':'test2'
});
var createOptions = {
    testName:'create script',
    hostname:'127.0.0.1',
    port: PORT,
    timeout:1000, // timeout 1 second since it should be very fast
    method: 'POST',
    headers: {
        'Content-Type':'application/x-www-form-urlencoded',
        'Content-Length':Buffer.byteLength(postData)
    },
    path:'/api/v1/script/?script_id=test2&body=hey_there',
}
var testCreate = () => {
    console.log(JSON.stringify({test:createOptions}));
    var req = http.request(createOptions, (res) => {
        console.log('STATUS: ' + res.statusCode);
        console.log('URL: ' + res.url);
        console.log('HEADERS:' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        let data = "";

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            console.log('data: ' + data);
        });

        res.on('error', (err) => {
            console.error('error: ' + err);
        });
    });
    req.on('error', (err) => {
        console.error('error making request: ' + err);
    });
    req.write(postData);
    req.end();
    console.log('METHOD: ' + req.method);
}

testCreate();
// testGet();
