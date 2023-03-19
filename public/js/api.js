
import {topNewGame} from './main.js';
import {platformList} from './platform.js';
import {gameSearch} from './main.js';
let dateObj = new Date();
let year = dateObj.getUTCFullYear();
const apiKey = "550b3b41e70a440abdf5cad43e2270b1";
var userInput = "";

export async function getGameInfo() {
    try {
        const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}`);
        const resParse = await response.json();
        topNewGame(resParse);
        return resParse;
    } catch (err) {
        throw new Error(err);
    };
};

export async function getGames() {
    try {
        const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}&dates=${year}-07-01,${year}-12-31&ordering=-added`);
        const resParse = await response.json();
        topNewGame(resParse);
        return resParse;
    } catch (err) {
        throw new Error(err);
    };
};


export async function getPlatforms() {
    try {
    const response = await fetch(`https://api.rawg.io/api/platforms?key=${apiKey}`);
    const resParse = await response.json();
    platformList(resParse);
    return resParse;
} catch (err) {
    throw new Error(err);
    };
};

export async function getUserGames() {
    try {
        userInput = $('.user-input-search').val();
        const response = await fetch(`https://api.rawg.io/api/games?search=${userInput}&key=${apiKey}`);
        const resParse = await response.json();
        gameSearch(resParse);
        return resParse;
    } catch (err) {
        throw new Error(err);
    };
};