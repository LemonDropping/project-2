const router = require('express').Router;
const gameRoutes = require('./gameRoute');
const commentRoutes = require('./commentsRoute');
const authRoute = require('./authRoute');


router.use('/games', gameRoutes);
router.use('/comments', commentRoutes);
router.use('/auth', authRoute);

module.exports = router;
