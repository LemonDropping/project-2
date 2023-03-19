const express = require('express');
const router = express.Router();
const { User, Game } = require('../../models');
const withAuth = require('../../utils/auth');
// getting all comments
router.get('/',  async (req, res) => {
    Comment.findAll({}).then(dbComment => res.json(dbComment))
    .catch(err => {
        res.status(500). json(err);
    });
});
// posting a comment when logged in
router.post('/:Id', withAuth, async (req, res) => {
    Comment.create({
        content: req.body.content,
        user_id: req.session.user_id,
        game_id: req.body.game_id,
    }).then(dbComment => res.json(dbComment))
    .catch(err => {
        res.status(500).json(err);
    });
});

// deleting a comment
router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
        where: {
            user_id: req.params.user_id
        }
    }).then(dbComment => {
        if(!dbComment) {
            res.status(404).json({ message: 'No comment found with ths ID.'});
            return;
        }
        res.json(dbComment);
    }).catch (err => {
        res.status(404).json(err);
    });
});

module.exports = router;