const express = require('express');
const router = express.Router();
const { Game, Comment, Review } = require('../../models');

router.get('/games:id', async (req, res) => {
    const idGame = req.params.id;
    const game = await Game.findByPk(idGame, {
        include: [Comment, Review]
    });
    res.json(game);
});

module.exports = router;