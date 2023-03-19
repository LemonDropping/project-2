const router = require('express').Router();
const apiRoutes = require('./api');
const userRoute = require('./api/user-route');
const gameRoute = require('./api/gameRoute')

router.use('/', gameRoute);
router.use('/login', userRoute);
router.use('/api', apiRoutes);

module.exports = router;