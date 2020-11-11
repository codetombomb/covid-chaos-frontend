const getEl = (el, cl = false) => {
    if (cl) {
        return document.getElementsByClassName(el)[0];
    } else {
        return document.getElementById(el)
    }
};


// const topFiveURL = 'https://covid-chaos-api.herokuapp.com/top-five';
const topFiveURL = 'http://localhost:3001/top-five';

// const gamesURL = 'https://covid-chaos-api.herokuapp.com/games';
const gamesURL = 'http://localhost:3001/games';

