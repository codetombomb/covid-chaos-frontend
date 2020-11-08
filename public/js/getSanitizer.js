function getSanitizer() {
    if (sanitizerAttrs.x < player.x + player.width - 2 && sanitizerAttrs.x + sanitizerAttrs.width > player.x && sanitizerAttrs.y < player.y + player.height - 10 && sanitizerAttrs.y + sanitizerAttrs.height > player.y) {
        score += 5;
        collectSanitizer.play();
        sanitizerAttrs.x = Math.floor(Math.random() * 555) + 1;
        sanitizerAttrs.y = Math.floor(Math.random() * 368) + 1;
    }
}