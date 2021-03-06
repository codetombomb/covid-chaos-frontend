const postScore = (score, time, tpColl, sanColl, user) => {
    if (user === "") {
        user = 'Anonymous';
    }
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