const apiKey = "550b3b41e70a440abdf5cad43e2270b1";
const fetch = require('node-fetch');
const URL = `https://api.rawg.io/api/games?key=${apiKey}`;

fetch(URL).then(response => response.json())
.then(json => console.log(json))
.catch(err => console.error(err));


