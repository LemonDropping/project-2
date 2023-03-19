const router = require('express').Router();
const apiRoutes = require('./api');
const loginRoute = require('./api/user-route');

router.use('/', loginRoute);
router.use('/api', apiRoutes);

module.exports = router;