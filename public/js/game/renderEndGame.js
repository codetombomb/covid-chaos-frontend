const renderEndGame = (numTp, numSanitizer, score, time) => {
    canvas.style.display = 'none';
    scoreTimer.style.display = 'none'
    const leaderBoard = getEl('top-five-div')
    leaderBoard.style.display = 'flex'
    leaderBoard.style.alignSelf = 'center';
    if (score > bottomScore) {
        console.log('You are in the top five!')
        endMessage.innerText = 'You have a top five score!';
        // Create SaveScore buton in app and set display to none
        // Display inline block here on SaveScore button
        // If current user, utton calls a POST request 
        // Else, display create user form only uniqe username 
    } else {
        endMessage.innerText = 'You have been infected with COVID-19! Please go home and recover!';
        endScore.innerText = `SCORE: ${score}`;
        endTime.innerText = `TIME: ${time}`;
        endTpCollected.innerText = `TP COLLECTED: ${numTp}`;
        endHandSanitizerCollected.innerText = `SANITIZER COLLECTED: ${numSanitizer}`;
        bonus.innerText = time > 30 ? `TIME BONUS: ${time} OVERALL SCORE: ${score + time}` : 'Stay COVID free for 30 seconds to receive a time bonus!';
        endGameDiv.style.display = 'inline-block';
        root.style.flexDirection = 'column-reverse';
    }
}