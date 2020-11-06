let stopId;

const player = {
    x: canvas.width / 10,
    y: canvas.height / 10 * 8,
    speed: 200, //movement in pixles per second
    width: 45,
    height: 45
}

const startGame = () => {
    update();
}

const update = () => {
    stopId = window.requestAnimationFrame(update);
    render();
    movePlayer(0.02);
}

const render = () => {
    ctx.drawImage(playerImage, player.x, player.y, player.width, player.height)
}

const stopGame = () => {

}

startGame()

// function updateCanvas() {
//     idEl('score').innerText = score;
//     stopId = window.requestAnimationFrame(updateCanvas)
//     requestId = undefined;
//     renderCanvas();
//     movePlayer(0.02);
//     getToiletPaper();
//     getSanitizer();
// }

// function renderCanvas() {
//     ctx.drawImage(bgImage, 0, 0);
//     ctx.drawImage(playerImage, player.x, player.y, player.width, player.height)
//     ctx.drawImage(tpImage, toiletPaperRoll.x, toiletPaperRoll.y, toiletPaperRoll.width, toiletPaperRoll.height)
//     ctx.drawImage(sanitizerImage, handSanitizer.x, handSanitizer.y, handSanitizer.width, handSanitizer.height)
//     for (let i = 0; i < numVirus; i++) {
//       covid[i].show();
//       covid[i].fall();
//     }
//     for (let i = 0; i < numInfected; i++) {
//       zombies[i].show();
//       zombies[i].fall();
//     }
//   }