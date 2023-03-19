const sequelize = require('../config/connection');
const {Game, Comment, User } = require('../models');
const gameData = require('./seed');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const games = await Game.bulkCreate(gameData);

    for(var i = 0; i < 20; i++) {
    }
}