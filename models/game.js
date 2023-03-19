const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');

class Game extends Model {}

Game.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      developers: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isbn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      platforms: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      publisher: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
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
  