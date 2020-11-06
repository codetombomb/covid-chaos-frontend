const keysDown = {};

window.addEventListener("keydown", function (e) {
    if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

window.addEventListener('keydown', function (e) {
    keysDown[e.keyCode] = true;
});

window.addEventListener('keyup', function (e) {
    delete keysDown[e.keyCode];
});

const movePlayer = (mod) => {
    if (37 in keysDown) { // Player holding left
        if (player.x > 0) {
            player.x -= player.speed * mod;
        }
    }
    if (38 in keysDown) { // Player holding up
        if (player.y > 0) {
            player.y -= player.speed * mod;
        }
    }
    if (39 in keysDown) { // Player holding right
        if (player.x < 556) {
            player.x += player.speed * mod;
        }
    }
    if (40 in keysDown) { // Player holding down
        if (player.y < 356) {
            player.y += player.speed * mod;
        }
    }
}