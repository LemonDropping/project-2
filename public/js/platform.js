const sectionCard = document.getElementById('platformCard');

export function platformList(response) {
    for(var i = 0; i < response.results.length; i++) {
        // creating the platform Card
        const platformCard = document.createElement('div');
        platformCard.classList.add('platformCard');
        sectionCard.append(platformCard);

        // creating platform title
        const platformName = document.createElement('h2');
        platformName.classList.add('platformName');
        platformCard.append(platformName);
        platformName.textContent = response.results[i].name;
    }
}

