const router = require('express').Router();
const apiRoutes = require('./api');
const gameRoute = require('./gameRoute.js');

router.use('/', gameRoute);
router.use('/api', apiRoutes);

module.exports = router;