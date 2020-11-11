let score = 0;
let timeCount = 0;
let tpCollected = 0;
let sanitizerCollected = 0;
let animationStopId;
let timerStopid;


const startGame = () => {
    startMessage.style.display = 'none';
    makeZombies();
    makeViruses();
    update();
    sneeze.play();
    mainMusic.play();
    timer.innerHTML = timeCount;
    timerStopid = setInterval(() => {
        timeCount++;
        getEl('timer').innerText = timeCount;
    }, 1000);
}

const update = () => {
    animationStopId = window.requestAnimationFrame(update);
    currentScore.innerText = score;
    render();
    movePlayer(0.02);
    getSanitizer();
    getTp();
}

const render = () => {
    ctx.drawImage(bgImage, 0, 0);
    ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
    ctx.drawImage(sanitizerImage, sanitizerAttrs.x, sanitizerAttrs.y, sanitizerAttrs.width, sanitizerAttrs.height);
    ctx.drawImage(tpImage, tpAttrs.x, tpAttrs.y, tpAttrs.width, tpAttrs.height);
    for (let i = 0; i < virusAttrs.quantity; i++) {
        virusAttrs.store[i].show();
        virusAttrs.store[i].fall();
    }

    for (let i = 0; i < zombieAttrs.quantity; i++) {
        zombieAttrs.store[i].show();
        zombieAttrs.store[i].fall();
    }
}

const stopGame = () => {
    cough.play();
    clearInterval(timerStopid);
    cancelAnimationFrame(animationStopId);
    startMessage.style.display = 'inline-block';
    startMessage.innerText = 'Press Space to restart!';
    renderEndGame(tpCollected, sanitizerCollected, score, timeCount);
}


function restart() {
    canvas.style.display = 'inline-block';
    getEl('top-five-div').style.display = 'none';
    scoreTimer.style.display = 'flex'
    endGameDiv.style.display = 'none';
    ctx.filter = "none"
    score = 0;
    timeCount = 0;
    tpCollected = 0;
    sanitizerCollected = 0;
    player.x = canvas.width / 10
    player.y = canvas.height / 10 * 8
    virusAttrs.store.length = 0;
    zombieAttrs.store.length = 0;
    mainMusic.currentTime = 0;
    canvas.style.backgroundImage = 'url(../../assets/background/covid-chaos.png)';
    startGame();
}
