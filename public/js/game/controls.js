const keysDown = {};

window.addEventListener("keydown", function (e) {
    if (["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"].indexOf(e.key) > -1) {
        e.preventDefault();
    }
}, false);

window.addEventListener("keydown", function (e) {
    keysDown[e.key] = true;
});

window.addEventListener("keyup", function (e) {
    delete keysDown[e.key];
});

const movePlayer = (mod) => {
    if ("ArrowLeft" in keysDown) {
        if (player.x > 0) {
            player.x -= player.speed * mod;
        }
    }
    if ("ArrowUp" in keysDown) {
        if (player.y > 0) {
            player.y -= player.speed * mod;
        }
    }
    if ("ArrowRight" in keysDown) {
        if (player.x < 556) {
            player.x += player.speed * mod;
        }
    }
    if ("ArrowDown" in keysDown) {
        if (player.y < 356) {
            player.y += player.speed * mod;
        }
    }
}