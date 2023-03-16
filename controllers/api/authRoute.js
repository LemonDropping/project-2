const express = require('express');
const router = express.Router();
// need bcrypt file to be made
const bcrypt = require('bcrypt.js');
const { User } = require('../../models');

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username }});
    if (!user) {
        return res.status(400).json({ message: 'Username or password is incorrect'});
    }
    const haveMatch = await bcrypt.compare(password, user.password);
    if (!haveMatch) {
        return res.status(400).json({ message: 'Username or password is incorrect'});
    }
    res.status(200).json({ message: 'Successfully logged in!'});
});

module.exports = router;