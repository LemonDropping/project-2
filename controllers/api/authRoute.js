const express = require('express');
const router = express.Router();
const { User } = require('../../models/user');
const { route } = require('./gameRoute');

router.post('./signup', async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json ({ message: 'Could not complete registration'})
    }
});

router.post('/login', async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({ message: 'Could not successfully login'})
    }

});

router.post('/logout', async (req, res) => {
    try {
    }
    catch (error) {
        res.status (500).json ({ message: 'Not able to logout'})
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