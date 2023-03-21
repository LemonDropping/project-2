const sequelize = require('../config/connection');
const {Game, Comment, User } = require('../models');
const hardCodedData = require('./game-seeds.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const games = await Promise.all(
        hardCodedData.map(async games => {
            return games;
        })
    );

    await Game.bulkCreate(games);
    process.exit(0);
}

seedDatabase();