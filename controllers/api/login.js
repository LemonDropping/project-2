const express = require('express');
const router = express.Router();
const Game = require('../../models/game');

function serveIndex(req, res) {
    res.sendFile('index.html', { root: __dirname });
}

router.get('/games', async (req, res) => {
    const games = await Game.findAll();
    res.json(games);
});

module.exports = router;