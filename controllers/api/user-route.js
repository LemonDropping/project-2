const express = require('express');
const router = express.Router();
const { User } = require('../../models');


router.post('/', async (req, res) => {
    try {
        const dataUser = await User.create(req.body);

        req.session.save(() => {

            req.session.user_id = dataUser.id;
            req.session.logged_in = false;

            res.status(200).json(userData);

        })
    } catch (err) {
        res.status(500).json(err);
    }
});


router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                email: req.body.email,  
            },
        });
        if(!userData) {
            res.status(400).json({ message: 'Incorrect email or password. Please try again.'});
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);
        if(!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password. Please try again.'});
            return;
        }
        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json({user: userData, message: 'You are now logged in.'});
        });
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});


router.post('/logout', (req, res) => {
    if(req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.post('/signup', async (req, res) => {
    try {
      const userData = await User.create({
        email: req.body.email,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
// router.post('/', async (req, res) => {
//     try {
//         const userData = await User.create({
//             email: req.body.email,
//             username: req.body.username,
//             password: req.body.password,
//         });
//        req.session.save(() => {
//         req.session.loggedIn = true;
//         res.status(200).json(userData);
//        }) 
//     } catch (error) {
//         console.log(error);
//         res.status(500).json ({ message: 'Could not complete registration'});
//     }
// });