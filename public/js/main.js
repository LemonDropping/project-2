import {getGameInfo, getGames, getPlatforms, getDLCList} from './api.js';

const showingGames = document.getElementById('bestGames');
const searchGame = document.getElementsByClassName('search-button');

export function topNewGame(response) {
    for (let i = 0; i < response.results.length; i++) {
        // Creating the game's card
        const gameCard = document.createElement('div');
        gameCard.classList.add('gameCard');
        showingGames.append(gameCard);

        // Image of Game
        const gameImage = document.createElement('img');
        gameImage.classList.add('gameImage');
        gameImage.src = response.results[i].background_image;
        gameCard.append(gameImage);

        //  title Meta
        const titleMeta = document.createElement('h2');
        titleMeta.classList.add('titleMeta');
        gameCard.append(titleMeta);

        // Title
        const gameTitle = document.createElement('h2');
        gameTitle.classList.add('gameTitle');
        titleMeta.append(gameTitle);
        gameTitle.textContent = response.results[i].name;

        // Metacritic
        const gameMetacritic = document.createElement('div');
        gameMetacritic.classList.add('gameMetacritic');
        if (response.results[i].metacritic === null) {
            gameMetacritic.classList.add("hide");
        } else {
            gameMetacritic.innerHTML = response.results[i].metacritic;
        }

        titleMeta.append(gameMetacritic);

        // Release Date
        const gameDate = document.createElement("p");
        gameDate.classList.add("gameDate");
        gameDate.innerHTML = response.results[i].released;
        gameCard.append(gameDate);

        // Genres
        const gameGenres = document.createElement("p");
        gameGenres.classList.add("gameGenres");
        gameGenres.innerHTML = response.results[i].genres[0].name;
        gameCard.append(gameGenres);  
        
        // Screenshots
        const screenTxt = document.createElement("p");
        screenTxt.classList.add("screenTxt");
        screenTxt.textContent = "Screenshots:";
        const zoneImg = document.createElement("div");
        zoneImg.classList.add("zoneImg");
        const gameScreenshots = document.createElement("img");
        gameScreenshots.classList.add("gameScreenshots");
        gameScreenshots.setAttribute("src", response.results[i].short_screenshots[1].image);
        gameCard.append(screenTxt);
        gameCard.append(zoneImg);
        zoneImg.append(gameScreenshots);        
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if(window.location.pathname.includes('index.html')) {
        getGameInfo();
    } else if(window.location.pathname.includes('Platforms.html')) {
        getPlatforms();
    } else if(window.location.pathname.includes('DLC.html')) {
        getDLCList();
    } else if(window.location.pathname.includes('NewGames.html')) {
        getGames();
    }
});

document.addEventListener('click', topNewGame);

