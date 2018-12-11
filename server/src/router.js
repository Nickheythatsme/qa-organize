const router = require('express').Router();
const scriptRouter = require('./controllers/script');


router.all('/', (req, res, next) => {
    logger.info({method:req.method, params:req.params, query:req.query, path:req.baseUrl});
})
router.use('/script',scriptRouter);

module.exports = router;
