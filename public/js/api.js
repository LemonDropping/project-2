
import {topNewGame} from './main.js';
import {platformList} from './platform.js';

let dateObj = new Date();
let year = dateObj.getUTCFullYear();
const apiKey = "9c0ac971fbe045f09b649d4eb26292be";


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

export async function getDLCList() {
    try {
        const response = await fetch(`https://api.rawg.io/api/games/4200/additions?key=${apiKey}`);
        const resParse = await response.json();
        expansionsList(resParse);
        return resParse;
    } catch (err) {
        throw new Error(err);
    };
}
