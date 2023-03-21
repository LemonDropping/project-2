const express = require('express');
const router = express.Router();
const { Comment } = require('../../models');

// getting all comments
router.get('/', (req, res) => {
    Comment.findAll().then(dbComment => res.json(dbComment))
    .catch(err => {
        res.status(500). json(err);
    });
});
// posting a comment when logged in
router.post('/:id', async (req, res) => {
    try {
    const newComment = await Comment.create({
        content: req.body.content,
        // user_id: req.session.user_id,
        // game_id: req.body.game_id,
    });
    res.status(200).json(newComment);
    } catch(err) {
        res.status(500).json(err);
    }
});

// deleting a comment
router.delete('/:id', async (req, res) => {
    try {
        const deleteComment = await Comment.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(deleteComment)
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;