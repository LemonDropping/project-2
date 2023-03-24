const router = require('express').Router();
const gameRoutes = require('./gameRoute');
const commentRoutes = require('./commentsRoute');
const userRoute = require('./user-route');

router.use('/game', gameRoutes);
router.use('/comments', commentRoutes);
router.use('/user', userRoute)

module.exports = router;
