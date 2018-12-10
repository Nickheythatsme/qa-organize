const router = require('express').Router();
const scriptRouter = require('./controllers/script');


router.use('/script',scriptRouter);

module.exports = router;
