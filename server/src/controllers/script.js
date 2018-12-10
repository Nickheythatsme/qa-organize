const { logger } = require('../../config');
const scriptModel = require('../models/script');
const app = require('express')();

// TODO add validators: https://express-validator.github.io/docs/

app.route('/')
    .all((req,res,next) => {
        logger.info({'script_request':{method:req.method, params:req.params, query:req.query}});
        next();
    })
    .get((req, res) => {
        scriptModel.get(req.query)
        .then(data => {
            res.statusCode=200;
            res.json(data)
        })
        .catch(err => {
            res.statusCode=err.statusCode;
            res.send('error: ' + err);
        });
    })
    .put((req, res) => {
        res.send('not implemented yet!');
    })
    .post((req,res) => {
        scriptModel.create(req.query).then(data => {
            res.json(data);
        }).catch(err => {
            res.send('error: ' + err);
        });
    })
    .delete([], (req, res) => {
        res.send('not implemented yet!');
        scriptModel.delete(req.query);
    })


module.exports = app;
