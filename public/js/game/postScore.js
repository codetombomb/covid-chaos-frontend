const postScore = (score, time, tpColl, sanColl, user = null) => {
    let data = {
        score: score,
        time: time,
        sanitizer_collected: sanColl,
        tp_collected: tpColl,
        username: user
    }
    fetch('http://localhost:3001/games', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(resp => resp.json())
        .then(info => {
            console.log('Success:', info);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    enterNameDiv.style.display = 'none';
    getNewTopFive();
}