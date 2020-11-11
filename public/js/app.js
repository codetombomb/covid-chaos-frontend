const root = getEl('root', true);
let bottomScore;
let initialStart = false;

const startMessageWrapper = document.createElement('div');
startMessageWrapper.id = 'start-message-wrapper'
const startMessage = document.createElement('h1');
startMessage.id = 'start-message';
startMessage.innerText = 'Press Space to play!';
startMessage.style.display = 'inline-block';
startMessageWrapper.appendChild(startMessage);
getEl('canvas-wrapper').appendChild(startMessageWrapper);

window.addEventListener('keypress', (e) => {
    if (e.code === 'Space' && initialStart === false) {
        initialStart = true;
        startGame();
    } else if (e.code === 'Space' && endGameDiv.style.display === 'inline-block' && timeCount > 0) {
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
getEl('canvas-wrapper').appendChild(scoreTimer);


const tableAttrs = ['Player Name', 'Score', 'Time', 'TP Collected', 'Sanitizer Collected']
const createTopFiveBoard = (games) => {
    bottomScore = games[4].score;
    let topFiveDiv = document.createElement('div');
    topFiveDiv.id = 'top-five-div';
    let topFiveH1 = document.createElement('h1');
    topFiveH1.innerText = 'Leader Board';
    topFiveH1.id = 'top-five-h1';
    topFiveDiv.appendChild(topFiveH1);
    let topFiveTable = document.createElement('table');
    topFiveTable.id = 'top-five-table';
    topFiveDiv.appendChild(topFiveTable);
    let tHeader = document.createElement('tr');
    tHeader.id = 't-header';
    topFiveTable.appendChild(tHeader);
    for (let i = 0; i < tableAttrs.length; i++) {
        let tHeadLabel = document.createElement('th');
        tHeadLabel.innerText = tableAttrs[i];
        tHeader.appendChild(tHeadLabel);
    }
    for (let j = 0; j < games.length; j++) {
        let newRow = document.createElement('tr');
        let userName = document.createElement('td');
        userName.innerText = games[j].player.username;
        newRow.appendChild(userName);
        let score = document.createElement('td');
        score.innerText = games[j].score;
        newRow.appendChild(score);
        let time = document.createElement('td');
        time.innerText = games[j].time;
        newRow.appendChild(time);
        let tpCollected = document.createElement('td');
        tpCollected.innerText = games[j].tp_collected;
        newRow.appendChild(tpCollected);
        let sanitizerCollected = document.createElement('td');
        sanitizerCollected.innerText = games[j].sanitizer_collected;
        newRow.appendChild(sanitizerCollected);
        topFiveTable.appendChild(newRow)
    }
    root.appendChild(topFiveDiv);
    topFiveDiv.style.display = 'none';
}

const endGameDiv = document.createElement('div');
endGameDiv.id = 'end-game-div';
endGameDiv.style.display = 'none';
root.appendChild(endGameDiv);

const endMessage = document.createElement('h2');
endGameDiv.appendChild(endMessage);

const enterNameDiv = document.createElement('div');
enterNameDiv.id = 'enter-name-div';
enterNameDiv.style.display = 'none';
const nameForm = document.createElement('form');
const nameLabel = document.createElement('label');
const nameInput = document.createElement('input');
nameInput.id = 'name-input';
enterNameDiv.appendChild(nameForm);
nameForm.appendChild(nameLabel);
nameForm.appendChild(nameInput);

const saveScoreButton = document.createElement('button');
saveScoreButton.innerText = 'Save My Score';
// saveScoreButton.style.display = 'none';
nameForm.appendChild(saveScoreButton);
endGameDiv.appendChild(enterNameDiv);

const statsList = document.createElement('ul');
const endScore = document.createElement('li');
statsList.appendChild(endScore);
const endTime = document.createElement('li');
statsList.appendChild(endTime);
const endTpCollected = document.createElement('li');
statsList.appendChild(endTpCollected);
const endHandSanitizerCollected = document.createElement('li');
statsList.appendChild(endHandSanitizerCollected);

endGameDiv.appendChild(statsList);

const bonus = document.createElement('p');
endGameDiv.appendChild(bonus)
