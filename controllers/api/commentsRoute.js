const express = require('express');
const router = express.Router();
const { Comment } = require('../../models/Comment');
const withAuth = require('../../utils/auth');

router.get('/comments/:gameId', withAuth, async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({ message: 'Comments not available'});
    }
});

router.post('/comments/game:Id', withAuth, async (req, res) => {
    try {
    } catch (error) {
       res.status(500).json({ message: 'Could not create comment'})
    }
});

module.exports = router;