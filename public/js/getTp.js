function getTp() {
    if (tpAttrs.x < player.x + player.width && tpAttrs.x + tpAttrs.width > player.x && tpAttrs.y < player.y + player.height && tpAttrs.y + tpAttrs.height > player.y) {
        score += 10;
        collectTp.play();
        tpAttrs.x = Math.floor(Math.random() * 555) + 1;
        tpAttrs.y = Math.floor(Math.random() * 368) + 1;
    }
}