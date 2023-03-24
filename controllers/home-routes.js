const withAuth = require('../utils/auth');
const express = require('express');
const router = express.Router();

router.use(express.static('public'));

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/game', withAuth, (req, res) => {
    res.render('game', {
        logged_in: req.session.logged_in,
    });
});

router.get('/comment', withAuth, (req, res) => {
    res.render('game', {
        logged_in: req.session.logged_in,
    });
});

module.exports = router;