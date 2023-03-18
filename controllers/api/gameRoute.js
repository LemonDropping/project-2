const express = require('express');
const router = express.Router();
const { Game, Comment, Review } = require('../../models/game');

router.get('/games/:id', async (req, res) => {
    try {
        const idGame = req.params.id;
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