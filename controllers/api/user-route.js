const express = require('express');
const router = express.Router();
const { User } = require('../../models');

// creating user
router.post('./signup', async (req, res) => {
    try {
        const userData = await User.create({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        });
       req.session.save(() => {
        req.session.loggedIn = true;
        res.status(200).json(userData);
       }) 
    } catch (error) {
        console.log(error);
        res.status(500).json ({ message: 'Could not complete registration'});
    }
});
// logging the user in
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

// logging the user out
router.post('/logout', (req, res) => {
    if(req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
})

module.exports = router;

// const express = require('express');
// const router = express.Router();
// // need bcrypt file to be made
// const bcrypt = require('bcrypt.js');
// const { User } = require('../../models');

// router.post('/login', async (req, res) => {
//     const { username, password } = req.body;
//     const user = await User.findOne({ where: { username }});
//     if (!user) {
//         return res.status(400).json({ message: 'Username or password is incorrect'});
//     }
//     const haveMatch = await bcrypt.compare(password, user.password);
//     if (!haveMatch) {
//         return res.status(400).json({ message: 'Username or password is incorrect'});
//     }
//     res.status(200).json({ message: 'Successfully logged in!'});
// });

// module.exports = router;