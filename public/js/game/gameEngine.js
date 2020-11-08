let score = 0;
let animationStopId;
let timerStopid;
let timeCount = 0;

const startGame = () => {
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
    console.log("STOP GAME!")
    cough.play()
    clearInterval(timerStopid)
    cancelAnimationFrame(animationStopId);
    console.log(timerStopid, animationStopId)
}

