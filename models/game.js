const { Model, DataTypes } = require('sequelize');
const sequelize = require ('./config/connection');

class Game extends Model {}

Game.init(
    {
      game_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING
      },
      developers: {
        type: DataTypes.STRING
      },
      isbn: {
        type: DataTypes.STRING
      },
      genre: {
        type: DataTypes.INTEGER
      },
      platforms: {
        type: DataTypes.INTEGER
      },
      publisher: {
        type: DataTypes.BOOLEAN
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'game'
    }
  );
  
  module.exports = Game;
  