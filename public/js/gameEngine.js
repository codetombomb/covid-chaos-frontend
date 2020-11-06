let stopId;

const startGame = () => {
    update();
    mainMusic.play();
}

const update = () => {
    stopId = window.requestAnimationFrame(update);
    render();
    movePlayer(0.02);
}

const render = () => {
    ctx.drawImage(bgImage, 0, 0)
    ctx.drawImage(playerImage, player.x, player.y, player.width, player.height)
}

const stopGame = () => {

}

