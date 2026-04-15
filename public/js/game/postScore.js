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
        .then(resp => {
            if (!resp.ok) {
                throw new Error('Failed to save score');
            }
            return resp.json();
        })
        .then(() => {
            enterNameDiv.style.display = 'none';
            getNewTopFive();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}