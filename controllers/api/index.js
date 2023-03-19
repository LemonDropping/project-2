const router = require('express').Router();
const gameRoutes = require('./gameRoute');
const commentRoutes = require('./commentsRoute');
const userRoute = require('./user-route');


router.use('/games', gameRoutes);
router.use('/comments', commentRoutes);
router.use('/users', userRoute);

module.exports = router;
