class Virus {
    constructor(virusX, virusY, width, height) {
        this.virusX = virusX;
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
        }
        else {
            this.virusX += Math.floor(Math.random() * -2) + 1
            this.virusY += Math.floor(Math.random() * 5) + 1
        }
    }

    collisionCheck(virusXPos, virusYPos) {
        if (virusXPos < player.x + player.width && virusXPos + this.width > player.x && virusYPos < player.y + player.height - 20 && virusYPos - 5 + this.height > player.y) {
            mainMusic.pause();
            stopGame();
        } else {
            return false;
        }
    }
}

const makeViruses = () => {
    for (let i = 0; i < virusAttrs.quantity; i++) {
        virusAttrs.store.push(new Virus(virusAttrs.x, virusAttrs.y, virusAttrs.width, virusAttrs.height))
    }
}

