const keysDown = {};

window.addEventListener("keydown", function (e) {
    console.log(e.key, e.keyCode, keysDown)
    if (["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"].indexOf(e.key) > -1) {
        e.preventDefault();
    }
}, false);

window.addEventListener('keydown', function (e) {
    keysDown[e.key] = true;
});

window.addEventListener('keyup', function (e) {
    delete keysDown[e.key];
});

const movePlayer = (mod) => {
    if ("ArrowLeft" in keysDown) { // Player holding left
        if (player.x > 0) {
            player.x -= player.speed * mod;
        }
    }
    if ("ArrowUp" in keysDown) { // Player holding up
        if (player.y > 0) {
            player.y -= player.speed * mod;
        }
    }
    if ("ArrowRight" in keysDown) { // Player holding right
        if (player.x < 556) {
            player.x += player.speed * mod;
        }
    }
    if ("ArrowDown" in keysDown) { // Player holding down
        if (player.y < 356) {
            player.y += player.speed * mod;
        }
    }
}


