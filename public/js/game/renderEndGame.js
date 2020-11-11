const renderEndGame = (numTp, numSanitizer, score, time) => {
    if (time > 1) {
        score = time + score + 250;
    }
    canvas.style.display = 'none';
    scoreTimer.style.display = 'none'
    const leaderBoard = getEl('top-five-div')
    leaderBoard.style.display = 'flex'
    leaderBoard.style.alignSelf = 'center';
    endGameDiv.style.display = 'inline-block';
    endScore.innerText = `SCORE: ${score}`;
    endTime.innerText = `TIME: ${time}`;
    endTpCollected.innerText = `TP COLLECTED: ${numTp}`;
    endHandSanitizerCollected.innerText = `SANITIZER COLLECTED: ${numSanitizer}`;
    root.style.flexDirection = 'column-reverse';
    if (score > bottomScore) {
        console.log('Score:', score, 'Btm Score:', bottomScore)
        endMessage.innerText = `You placed in the top five with you score of ${score}! Would you like to save?`;
        enterNameDiv.style.display = 'inline-block';
        // Create SaveScore buton in app and set display to none xxx
        // Display inline block here on SaveScore button
        saveScoreButton.style.display = 'inline-block';
        saveScoreButton.addEventListener('click', function (e) {
            // e.preventDefault();
            let user = getEl('name-input').value
            postScore(score, time, numTp, numSanitizer, user);
        })
    } else {
        endMessage.innerText = 'You have been infected with COVID-19! Please go home and recover!';
    }
}


// CREATE THE FORM TO SUBMIT THE USERNAME BEFORE SAVE SCORE BUTN 