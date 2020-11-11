let allPlayersURL = 'http://localhost:3001/players';
let allGamesURL = 'http://localhost:3001/games';
let topFiveURL = 'http://localhost:3001/top-five';
const topFiveGames = {};


document.addEventListener('DOMContentLoaded', () => {
    fetch(topFiveURL)
        .then(resp => resp.json())
        .then(data => {
            createTopFiveBoard(data);
        })
});


