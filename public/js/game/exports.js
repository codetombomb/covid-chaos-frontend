const getEl = (el, cl = false) => {
    if (cl) {
        return document.getElementsByClassName(el)[0];
    } else {
        return document.getElementById(el)
    }
};


const topFiveURL = 'https://chaos-server-co44.onrender.com/top-five';
// const topFiveURL = 'http://localhost:3001/top-five';

const gamesURL = 'https://chaos-server-co44.onrender.com/games';
// const gamesURL = 'http://localhost:3001/games';

