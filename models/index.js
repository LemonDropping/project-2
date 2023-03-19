const Comment = require('./Comment');
const User = require('./User');
const Game = require('./Game');

User.hasMany(Comment, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

Game.hasMany(Comment, {
    foreignKey: 'game_id',
});

Comment.belongsToMany(Game, {
    through: {
        model: Game,
        unique: false,
    },
    as: 'game_comments'
});

module.exports = {User, Comment, Game }
