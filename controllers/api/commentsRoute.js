const express = require('express');
const router = express.Router();


const { Comment, Game } = require('../../models');

router.get('/game/:id/comments', async (req, res) => {
    try {
      const gameId = req.params.id;
      const comments = await Comment.findAll({
        where: { game_id: gameId },
        include: { model: Game }
      });
      res.json(comments);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

module.exports = router;
    
// router.get('/',  async (req, res) => {
//     Comment.findAll({}).then(dbComment => res.json(dbComment))
//     .catch(err => {
//         res.status(500). json(err);
//     });
// });
// posting a comment when logged in
// router.post('/:Id', withAuth, async (req, res) => {
//     Comment.create({
//         content: req.body.content,
//         user_id: req.session.user_id,
//         game_id: req.body.game_id,
//     }).then(dbComment => res.json(dbComment))
//     .catch(err => {
//         res.status(500).json(err);
//     });
// });

// // deleting a comment
// router.delete('/:id', withAuth, (req, res) => {
//     Comment.destroy({
//         where: {
//             user_id: req.params.user_id
//         }
//     }).then(dbComment => {
//         if(!dbComment) {
//             res.status(404).json({ message: 'No comment found with ths ID.'});
//             return;
//         }
//         res.json(dbComment);
//     }).catch (err => {
//         res.status(404).json(err);
//     });
// });


// module.exports = router;