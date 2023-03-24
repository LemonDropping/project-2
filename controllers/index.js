const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const userRoute = require('./api/user-route');
const gameRoute = require('./api/gameRoute');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/login', userRoute);


module.exports = router;