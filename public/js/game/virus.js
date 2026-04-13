class Virus {
    constructor(virusY, width, height) {
        this.virusX = Math.floor(Math.random() * 580);
        this.virusY = virusY;
        this.width = width;
        this.height = height;
    }

    show() {
        ctx.drawImage(virusImage, this.virusX, this.virusY, this.width, this.height)
    }

    fall() {
        if (this.virusY > canvas.height) {
            this.virusX = Math.floor(Math.random() * canvas.width) + 5;
            this.virusY = Math.floor(Math.random() * 100) - 100;
        }
        else if (this.collisionCheck(this.virusX, this.virusY)) {
            console.log('game over!');
            mainMusic.pause();
            stopGame();
        }
        else {
            this.virusY += Math.random() * 1.5 + 0.5
            this.virusX += Math.random() * -0.5
        }
    }

    collisionCheck(virusXPos, virusYPos) {
        const padding = 10;

        return (
            this.virusX + padding < player.x + player.width - padding &&
            this.virusX + this.width - padding > player.x + padding &&
            this.virusY + padding < player.y + player.height - padding &&
            this.virusY + this.height - padding > player.y + padding
        );
    }
}

const makeViruses = () => {
    for (let i = 0; i < virusAttrs.quantity; i++) {
        virusAttrs.store.push(new Virus(virusAttrs.y, virusAttrs.width, virusAttrs.height))
    }
}

