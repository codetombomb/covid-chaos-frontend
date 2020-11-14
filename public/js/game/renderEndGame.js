const renderEndGame = (numTp, numSanitizer, score, time) => {
    if (time > 29) {
        bonus.style.display = 'inline-block';
        let bonusScore = time - 29;
        bonus.innerText = `BONUS: ${bonusScore}`;
        score = bonusScore + score;
    }
    canvas.style.display = 'none';
    scoreTimer.style.display = 'none'
    const leaderBoard = getEl('top-five-div')
    leaderBoard.style.display = 'flex'
    leaderBoard.style.alignSelf = 'center';
    endGameDiv.style.display = 'flex';
    endScore.innerText = `SCORE: ${score}`;
    endTime.innerText = `TIME: ${time}`;
    endTpCollected.innerText = `TP COLLECTED: ${numTp}`;
    endHandSanitizerCollected.innerText = `SANITIZER COLLECTED: ${numSanitizer}`;
    root.style.flexDirection = 'column-reverse';
    if (score > bottomScore) {
        endMessage.innerText = `You placed in the top five with you score of ${score}!`;
        enterNameDiv.style.display = 'inline-block';
        saveScoreButton.style.display = 'inline-block';
        saveScoreButton.addEventListener('click', function () {
            let user = getEl('name-input').value
            postScore(score, time, numTp, numSanitizer, user);
        })
    } else {
        endMessage.innerText = 'You have been infected with COVID-19! Please go home and recover!';
    }
}
