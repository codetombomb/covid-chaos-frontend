class Zombie {
    constructor(width, height) {
        this.zombieX = Math.floor(Math.random() * 480) + 50;
        this.zombieY = Math.floor(Math.random() * 150) - 250;
        this.width = width;
        this.height = height;
        this.speed = Math.floor(Math.random() * 2) + 2;
    }

    show() {
        ctx.drawImage(zombieImage, this.zombieX, this.zombieY, this.width, this.height);
    }

    fall() {
        if (this.zombieY > canvas.height) {
            this.zombieX = Math.floor(Math.random() * canvas.width) + 5;
            this.zombieY = Math.floor(Math.random() * 100) - 300;
        }
        else if (this.collisionCheck(this.zombieX, this.zombieY)) {
            console.log('game over!');
        }
        else {
            this.zombieY += this.speed;
        }
    }

    collisionCheck(zombieXPos, zombieYPos) {
        if (zombieXPos < player.x + player.width - 5 && zombieXPos + this.width - 5 > player.x && zombieYPos < player.y + player.height - 20 && zombieYPos + this.height - 12 > player.y) {
            mainMusic.pause();
            stopGame();
        } else {
            return false;
        }
    }
}

const makeZombies = () => {
    for (let i = 0; i < zombieAttrs.quantity; i++) {
        zombieAttrs.store.push(new Zombie(zombieAttrs.width, zombieAttrs.height));
    }
}