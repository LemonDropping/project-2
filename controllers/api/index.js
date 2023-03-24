const router = require('express').Router();
const commentRoutes = require('./commentsRoute');
const userRoute = require('./user-route');

router.use('/game', gameRoutes);
router.use('/comments', commentRoutes);
router.use('/user', userRoute)

module.exports = router;
