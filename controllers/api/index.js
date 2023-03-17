const router = require('express').Router;
const gameRoutes = require('./gameRoute');
const commentRoutes = require('./commentsRoute');

router.use('/games', gameRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
