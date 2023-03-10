const sequelize = require('../config/connection');
const seedGame = require('../models/game');
const dishData = require('./game-seeds.json');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedGame();

    process.exit(0);
};

seedAll();