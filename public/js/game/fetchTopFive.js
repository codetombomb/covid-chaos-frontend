let allPlayersURL = 'http://localhost:3001/players';
let allGamesURL = 'http://localhost:3001/games';
let topFiveURL = 'https://covid-chaos-api.herokuapp.com/top-five';


document.addEventListener('DOMContentLoaded', () => {
    fetch(topFiveURL)
        .then(resp => resp.json())
        .then(data => {
            createTopFiveBoard(data);
        })
});


