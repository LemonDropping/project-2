const router = require('express').Router();
const commentRoutes = require('./commentsRoute');
const userRoute = require('./user-route');



router.use('/comments', commentRoutes);
router.use('/users', userRoute);

module.exports = router;
