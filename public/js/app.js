const root = getEl('root', true);

// const headline = document.createElement('h1');
// headline.innerText = 'Covid Chaos'
// root.appendChild(headline);

const startButton = document.createElement('button')
startButton.class = 'button'
startButton.innerHTML = 'Start Game!'
startButton.addEventListener('click', () => {
    console.log('starting game')
    startGame();
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

document.body.appendChild(startButton)


