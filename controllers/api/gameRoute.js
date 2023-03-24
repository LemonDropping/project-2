const express = require('express');
const router = express.Router();
const { Game, Comment } = require('../../models');
const withAuth = require('../../utils/auth')


router.post('/game', async (req, res) => {
    try {
        const dataGame = await dataGame.create({
            game_name: req.body.tag_name
        })
        res.status(200).json(dataGame);
    } catch (err) {
        res.status(500).json(err)
    }
});

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
// router.get('/', async (req, res) => {
//     try {
//         const dbGameData = await Game.findAll({
//             include: [
//                 {
//                     model: Comment,
//                     attributes: ['title', 'developers', 'genre', 'platforms', 'publishers'],
//                 },
//             ],
//         });
//         const videoGames = dbGameData.map((game) => 
//             game.get({ plain: true })
//         );
//         res.render('homepage', {
//             videoGames
//         });
//     } catch(err) {
//         res.status(500).json(err)
//     }
// });

// Get one game