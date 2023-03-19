const sequelize = require('../config/connection');
const {Game, Comment, User } = require('../models');
const gameData = require('../node-api-fetch/index');
const hardCodedData = require('./game-seeds.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const games = await Game.bulkCreate(gameData);
    const hardCodedGames = await Game.bulkCreate(hardCodedData);

    for(var i = 0; i < 20; i++) {
        const randomGame  = games[Math.floor(Math.random() * games.length)];
    
           const hardCodedGame  = hardCodedGames[Math.floor(Math.random() * hardCodedGames.length)];

        await Game.create({
             randomGame,
             hardCodedGame
        }).catch(err => {
            console.log(err)
        });
    }

    process.exit(0);
}

seedDatabase();