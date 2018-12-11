const { logger } = require('../../config');
const scriptModel = require('../models/script');
const app = require('express')();

// TODO add validators: https://express-validator.github.io/docs/

app.route('/')
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
        scriptModel.create(req.query).then(data => {
            logger.info({
                label:'script',
                message:{
                    type: created,
                    message:data
                }
            });
            res.json(data);
        }).catch(err => {

            logger.error({method:'POST',message:err});
            res.send('error: ' + err);
        });
    })

    .post((req,res) => {
        res.send('not implemented yet!');
    })

    .delete([], (req, res) => {
        res.send('not implemented yet!');
        scriptModel.delete(req.query);
    })


module.exports = app;
