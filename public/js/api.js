
// let dateObj = new Date();
// let year = dateObj.getUTCFullYear();
// const apiKey = "550b3b41e70a440abdf5cad43e2270b1";
// var userInput = "";

// export async function getGameInfo() {
//     try {
//         const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}`);
//         const resParse = await response.json();
//         return resParse;
//     } catch (err) {
//         throw new Error(err);
//     };
// };

// export async function getGames() {
//     try {
//         const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}&dates=${year}-07-01,${year}-12-31&ordering=-added`);
//         const resParse = await response.json();
//         return resParse;
//     } catch (err) {
//         throw new Error(err);
//     };
// };


// export async function getPlatforms() {
//     try {
//     const response = await fetch(`https://api.rawg.io/api/platforms?key=${apiKey}`);
//     const resParse = await response.json();
//     return resParse;
// } catch (err) {
//     throw new Error(err);
//     };
// };

// export async function getUserGames() {
//     try {
//         userInput = $('.user-input-search').val();
//         const response = await fetch(`https://api.rawg.io/api/games?search=${userInput}&key=${apiKey}`);
//         const resParse = await response.json();
//         return resParse;
//     } catch (err) {
//         throw new Error(err);
//     };
// };

// const displayInfo = async (games) => {
//     const games = await getGameInfo();
//     const container = document.getElementById('bestGames');
//     container.innerHTML = '';

//     games.forEach((game) => {

//                 // Creating the game's card
//             const gameCard = document.createElement('div');
//             gameCard.classList.add('gameCard');
//             container.append(gameCard);
    
//             // Image of Game
//             const gameImage = document.createElement('img');
//             gameImage.classList.add('gameImage');
//             gameImage.src = game.background_image;
//             gameCard.append(gameImage);
    
//             //  title Meta
//             const titleMeta = document.createElement('h2');
//             titleMeta.classList.add('titleMeta');
//             gameCard.append(titleMeta);
    
//             // Title
//             const gameTitle = document.createElement('h2');
//             gameTitle.classList.add('gameTitle');
//             titleMeta.append(gameTitle);
//             gameTitle.textContent = game.name;
    
//             // Metacritic
//             const gameMetacritic = document.createElement('div');
//             gameMetacritic.classList.add('gameMetacritic');
//             if (game.metacritic === null) {
//                 gameMetacritic.classList.add("hide");
//             } else {
//                 gameMetacritic.innerHTML = game.metacritic;
//             }
    
//             titleMeta.append(gameMetacritic);
    
//             // Release Date
//             const gameDate = document.createElement("p");
//             gameDate.classList.add("gameDate");
//             gameDate.innerHTML = game.released;
//             gameCard.append(gameDate);
    
//             // Genres
//             const gameGenres = document.createElement("p");
//             gameGenres.classList.add("gameGenres");
//             gameGenres.innerHTML = game.genres[0].name;
//             gameCard.append(gameGenres);  
            
//             // Screenshots
//             const screenTxt = document.createElement("p");
//             screenTxt.classList.add("screenTxt");
//             screenTxt.textContent = "Screenshots:";
//             const zoneImg = document.createElement("div");
//             zoneImg.classList.add("zoneImg");
//             const gameScreenshots = document.createElement("img");
//             gameScreenshots.classList.add("gameScreenshots");
//             gameScreenshots.setAttribute("src", game.short_screenshots[1].image);
//             gameCard.append(screenTxt);
//             gameCard.append(zoneImg);
//             zoneImg.append(gameScreenshots);  
//         })
//         };

// const platformList = async (res) => {
//     const platforms = await getPlatforms();
//     const sectionCard = document.getElementById('platformCard');
//     for(var i = 0; i < res.results.length; i++) {
//         platforms.forEach((platform) => {

        
//         // creating the platform Card
//         const platformCard = document.createElement('div');
//         platformCard.classList.add('platformCard');
//         sectionCard.append(platformCard);

//         // creating platform title
//         const platformName = document.createElement('h2');
//         platformName.classList.add('platformName');
//         platformCard.append(platformName);
//         platformName.textContent = response.results[i].name;
//     })
//     }
// };

// $('.search-button').on('submit', (e) => {
//     e.preventDefault();
//     displayInfo(game);
// })



















    // displayInfo(data);
    // } else if(window.location.pathname.includes('/platforms')) {
    //     search = document.querySelector('#platfromCard');
    //     const data = await getPlatforms(search);
    //     platformList(data);
    // } else if(window.location.pathname.includes('/Newgames')) {
    //     search = document.querySelector('#newGames');
    //     const data = await getGames(search);
    //     displayInfo(data);
    // } else if(window.location.pathname.includes('/')) {
    //     search = document.querySelector('#bestGames');
    //     const data = await getGameInfo(search);
    //     displayInfo(data);
    // }