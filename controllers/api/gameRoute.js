const express = require('express');
const router = express.Router();
const { Game, Comment } = require('../../models');
const withAuth = require('../../utils/auth')

router.get('/games/:id', withAuth, async (req, res) => {
    try {
        const idGame = req.params.id;
        console.log(idGame)
        const game = await Game.findByPk(idGame, {
            include: [Comment, Review]
        });

        if (!game) {
            return res.status(404).json ({ message: 'The game was not found' });
        }
        res.json(game);
    } catch (err) {
        console.error(err);
        res.status(500).json(err)
    }
});

module.exports = router;