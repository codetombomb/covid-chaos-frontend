const root = getEl('root', true);

const startMessage = document.createElement('h1');;
startMessage.id = 'start-message';
startMessage.innerText = 'Press Space to play!';
startMessage.style.display = 'inline-block';
root.appendChild(startMessage);

window.addEventListener('keypress', (e) => {
    if (e.code === 'Space' && startMessage.innerText === 'Press Space to play!' && timeCount === 0) {
        console.log('first start')
        startGame();
    } else if (e.code === 'Space' && startMessage.innerText === 'Press Space to restart!' && timeCount > 0) {
        console.log('restarting')
        restart();
    }
})

const scoreTimer = document.createElement('div');
scoreTimer.id = 'score-timer'

const timer = document.createElement('h1');
timer.id = 'timer';

const elapsedTime = document.createElement('h1');
elapsedTime.innerText = 'Time: ';

const currentScoreLable = document.createElement('h1');
currentScoreLable.innerText = 'Score: ';

const currentScore = document.createElement('h1');
currentScore.id = 'score'

scoreTimer.appendChild(elapsedTime);
scoreTimer.appendChild(timer);
scoreTimer.appendChild(currentScoreLable)
scoreTimer.appendChild(currentScore)
root.appendChild(scoreTimer);


