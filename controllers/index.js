const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const gameRoute = require('./gameRoute');

router.use('/game', gameRoute);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;