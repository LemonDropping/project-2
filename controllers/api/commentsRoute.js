const express = require('express');
const router = express.Router();
const { Comment } = require('../../models/comment');
const ifLoggedIn = require('../../utils/auth');

router.get('/comments/:gameId', ifLoggedIn, async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({ message: 'Comments not available'});
    }
});

router.post('/comments/game:Id', ifLoggedIn, async (req, res) => {
    try {
    } catch (error) {
       res.status(500).json({ message: 'Could not create comment'})
    }
});

module.exports = router;