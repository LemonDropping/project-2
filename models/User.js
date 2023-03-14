const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');


class User extends Model {
    checkPassword(){
        return bcrypt
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            //validate:
        }
    },
    {
        hooks: {
            // need to add hook for bcrypt here
        },
        sequelize,
        timestamps:false,
        freezeTableName: true,
        underscored: truea,
        modelName: 'user'
    }
);


module.exports = User;