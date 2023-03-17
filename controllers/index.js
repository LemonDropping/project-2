const router = require('express').Router();
const apiRoutes = require('./api');
const loginRoute = require('./api/login');

router.use('/', loginRoute);
router.use('/api', apiRoutes);

module.exports = router;