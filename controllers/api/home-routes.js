const router = require('express').Router;
const { all } = require('../../models');

router.get ('/', async (req, res) => {
    try {
        const loginData = await all();
        res.json(data);
    } catch (error) {
        console.error (error);
        res.status(500).send('Internal Server Error');
    }
});