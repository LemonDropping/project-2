const router = require('express').Router();
const apiRoutes = require('./api');
const loginRoute = require('./api/login');
// may just need '/'
router.use('/login', loginRoute);
router.use('/api', apiRoutes);

module.exports = router;