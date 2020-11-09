const root = getEl('root', true);

const startMessageWrapper = document.createElement('div');
startMessageWrapper.id = 'start-message-wrapper'
const startMessage = document.createElement('h1');;
startMessage.id = 'start-message';
startMessage.innerText = 'Press Space to play!';
startMessage.style.display = 'inline-block';
startMessageWrapper.appendChild(startMessage);
getEl('canvas-wrapper').appendChild(startMessageWrapper);

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
getEl('canvas-wrapper').appendChild(scoreTimer);

const tableAttrs = ['Username', 'Score', 'Time', 'TP Collected', 'Sanitizer Collected']
const createTopFiveBoard = (games) => {
    // Create 'top-five-div'
    let topFiveDiv = document.createElement('div');
    topFiveDiv.id = 'top-five-div';
    let topFiveH1 = document.createElement('h1');
    topFiveH1.innerText = 'Leader Board';
    topFiveH1.id = 'top-five-h1';
    topFiveDiv.appendChild(topFiveH1);
    // Create 'table' element
    let topFiveTable = document.createElement('table');
    // Set table id to top-five-table'
    topFiveTable.id = 'top-five-table';
    topFiveDiv.appendChild(topFiveTable);
    // Create a 'tr' element and set id to 't-header'
    let tHeader = document.createElement('tr');
    tHeader.id = 't-header';
    topFiveTable.appendChild(tHeader);
    // Loop over first game and:
    for (let i = 0; i < tableAttrs.length; i++) {
        //for each attr, create 'th' element and append child to 't-header' or 'table' el
        let tHeadLabel = document.createElement('th');
        tHeadLabel.innerText = tableAttrs[i];
        tHeader.appendChild(tHeadLabel);
        // Username, score, time, tp_collected, sanitizer collected
    }
    console.log(topFiveTable)
    console.log(games[0])
    // Loop over all games and for each game:
    for (let j = 0; j < games.length; j++) {
        // Create a 'tr'
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
}