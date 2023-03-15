const expansionsCard = document.getElementById('expansions');

 export function expansionsList(response) {
for( var i = 0; i < response.results.length; i++) {
    // Card for DLC content
    const dlcCard = document.createElement("div");
    dlcCard.classList.add('dlcCard');
    expansionsCard.append(dlcCard);

    // DLC Image
    const dlcImage = document.createElement('img');
    dlcImage.classList.add('dlcImage');
    dlcImage.src = response.results[i].background_image;
    dlcCard.append(dlcImage);

    // DLC Title
    const dlcTitle = document.createElement('h2');
    dlcTitle.classList.add('dlcTitle');
    dlcTitle.textContent = response.results[i].name;

    // DLC Release Date
    const dlcDate = document.createElement('p');
    dlcDate.classList.add('dlcDate');
    dlcDate.innerHTML = response.results[i].released;
    dlcCard.append(dlcDate);

    // Note
    const dlcNote = document.createElement("p");
    dlcNote.classList.add("dlcNote");
    dlcNote.innerHTML = response.results[i].ratings[0].title.toUpperCase();
    dlcCard.append(dlcNote);
    }
}

