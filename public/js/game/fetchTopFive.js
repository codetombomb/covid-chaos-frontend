// let topFiveURL = 'http://localhost:3001/top-five'
let topFiveURL = 'https://covid-chaos-api.herokuapp.com/top-five';


document.addEventListener('DOMContentLoaded', () => {
    fetch(topFiveURL)
        .then(resp => resp.json())
        .then(data => {
            createTopFiveBoard(data);
        })
});


