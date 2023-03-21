const express = require('express');
const router = express.Router();
const { Game, Comment } = require('../models');
const withAuth = require('../utils/auth')
const {getGames} = require('../utils/helpers')

// Home page
// Home page
router.get('/', async (req, res) => {
    try {
        const dbGameData = await Game.findAll({
            include: [
                {
                    model: Comment, // Change this from Game to Comment
                    attributes: ['id', 'content', 'user_id', 'game_id'], // Change the attributes accordingly
                },
            ],
        });
        const videoGames = dbGameData.map((game) =>
            game.get({ plain: true })
        );
        res.render('homepage', {
            videoGames
        });
    } catch (err) {
        res.status(500).json(err)
    }
});


// Get one game
router.get('/games/:id', withAuth, async (req, res) => {
    try {
        const idGame = req.params.id;
        console.log(idGame)
        const game = await Game.findByPk(idGame, {
            include: [Comment]
        });

        if (!game) {
            return res.status(404).json({ message: 'The game was not found' });
        }
        res.json(game);
    } catch (err) {
        console.error(err);
        res.status(500).json(err)
    }
});

router.get('/signup', (req, res) => {
    res.render('signup');
  });
  
  router.get('/login', (req, res) => {
    res.render('login');
  });
  

module.exports = router;