const express = require('express');
const router = express.Router();
const { Comment } = require('../../models/comment');

router.get('/comments/:gameId', async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({ message: 'Comments not available'});
    }
});

router.post('/comments/game:Id', async (req, res) => {
    try {
    } catch (error) {
       res.status(500).json({ message: 'Could not create comment'})
    }
});

module.exports = router;