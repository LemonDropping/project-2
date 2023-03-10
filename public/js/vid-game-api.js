const api = "2d91a382e86e43d2aca0f4cc6000e2ef";

var newGame;
var searchTerm = "";
var lastGame = "";

console.log(`
Project #2: Video Game Finder

Developed By:
Cole Roberts
Eric Reyes
Dino Arslanovic
Kamel Tabeche`);

for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if (!key.match(/^games\d+$/)) {
        localStorage.removeItem(key);
    }
};

const runVGSearch = (videoGame => {
    
})

