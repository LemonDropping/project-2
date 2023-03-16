const express = require('express');
const router = express.Router();
const db = require('../models');

router.post('/comment', async (req, res) => {
    try {
        if (!req.session.user) {
            return res.status(401).json({ message: 'Your are not authenticated'});
        }

        const { gameId, content } = req.body

        const newComment = await db.Comment.create({
            content: content,
            UserId: req.session.user.id,
            GameId: gameId
        });

        res.status(201).json(newComment);
    } catch(error) {
        res.status(500).json({ message: 'Error adding comment', error: error})
    }
});

module.exports = router;