let allPlayersURL = 'http://localhost:3001/players';
let allGames = 'http://localhost:3001/games'

document.addEventListener('DOMContentLoaded', () => {
    fetch(allPlayersURL)
        .then(resp => resp.json())
        .then(data => console.log(data))
});