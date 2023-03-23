let dateObj = new Date();
let year = dateObj.getUTCFullYear();
const apiKey = "550b3b41e70a440abdf5cad43e2270b1";
var userInput = "";

async function getGameInfo() {
    try {
        const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}`);
        const resParse = await response.json();
        return resParse;
    } catch (err) {
        throw(err);
    };
};

async function getGames() {
    try {
        const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}&dates=${year}-07-01,${year}-12-31&ordering=-added`);
        const resParse = await response.json();
       return resParse;
    } catch (err) {
        throw(err);
    };
};


async function getPlatforms() {
    try {
    const response = await fetch(`https://api.rawg.io/api/platforms?key=${apiKey}`);
    const resParse = await response.json();
    return resParse;
} catch (err) {
    throw (err);
    };
};

async function getUserGames() {
    try {
        userInput = $('.user-input-search').val();
        const response = await fetch(`https://api.rawg.io/api/games?search=${userInput}&key=${apiKey}`);
        const resParse = await response.json();
        return resParse;
    } catch (err) {
        throw (err);
    };
};

module.exports = {getGameInfo, getGames, getPlatforms, getUserGames};