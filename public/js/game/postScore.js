const gamesURL = 'https://covid-chaos-api.herokuapp.com/games'
// const gameURL = 'http://localhost:3001/games'

const postScore = (score, time, tpColl, sanColl, user) => {
    if (user === "") {
        user = 'Anonymous';
    }
    debugger
    let data = {
        score: score,
        time: time,
        sanitizer_collected: sanColl,
        tp_collected: tpColl,
        username: user
    }
    fetch(gamesURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(resp => resp.json())
        .then(info => {
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    enterNameDiv.style.display = 'none';
    getNewTopFive();
}