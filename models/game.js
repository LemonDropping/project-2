const { Model, DataTypes } = require('sequelize');
const sequelize = require ('./config/connection');

class Game extends Model {}

Game.init(
    {
      // Manually define the primary key
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
      // Prevent sequelize from renaming the table
      freezeTableName: true,
      underscored: true,
      modelName: 'game'
    }
  );
  
  module.exports = Game;
  