let stopId;

const startGame = () => {
    makeZombies();
    makeViruses();
    update();
    mainMusic.play();
}

const update = () => {
    stopId = window.requestAnimationFrame(update);
    render();
    movePlayer(0.02);
}

const render = () => {
    ctx.drawImage(bgImage, 0, 0);
    ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
    for (let i = 0; i < virusAttrs.quantity; i++) {
        virusAttrs.store[i].show();
        virusAttrs.store[i].fall();
    };

    for (let i = 0; i < zombieAttrs.quantity; i++) {
        zombieAttrs.store[i].show();
        zombieAttrs.store[i].fall();
    };
}

const stopGame = () => {
    console.log("STOP GAME!")
    window.cancelAnimationFrame(stopId);
}

