const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true

        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reviewContent: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        user_id: {
            references: {
                model: 'user',
                key: 'id'
            },
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'review'
    }
);

model.exports = Review;