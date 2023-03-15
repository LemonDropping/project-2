const router = require('express').Router();
const login = require('./api/loginRoutes');
const homeRoutes = require('./api/homeRoutes');

router.use('/login', login);
router.use('./hone', homeRoutes);


//to be completed 




module.exports = router;


