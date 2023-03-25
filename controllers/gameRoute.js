const express = require('express');
const router = express.Router();
const { Game, Comment } = require('../models');
const withAuth = require('../utils/auth')


// Home page
router.get('/', async (req, res) => {
    try {
        const dbGameData = await Game.findAll({
            include: [
                {
                    model: Comment,
                    attributes: ['id', 'content', 'user_id', 'game_id'],
                },
            ],
        });
        const videoGames = dbGameData.map((game) => 
            game.get({ plain: true })
        );
        res.render('homepage', {
            videoGames
        });
    } catch(err) {
        res.status(500).json(err)
    }
});

// Get one game
router.get('/game/:id', withAuth, async (req, res) => {
    try {
        const idGame = req.params.id;
        console.log(idGame)
        const game = await Game.findByPk(idGame, {
            include: [Comment]
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