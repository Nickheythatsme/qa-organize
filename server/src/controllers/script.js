const scriptModel = require('../models/script');
const app = require('express')();

app.route('/')
    .get((req, res) => {
        res.send('here!');
    })

module.exports = app;
