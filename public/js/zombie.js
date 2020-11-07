class Zombie {
    constructor(width, height) {
        this.zombieX = Math.floor(Math.random() * 480) + 50;
        this.zombieY = Math.floor(Math.random() * 150) - 250;
        this.width = width;
        this.height = height;
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
            this.zombieY += zombieAttrs.speed
        }
    }

    collisionCheck(zombieXPos, zombieYPos) {
        if (zombieXPos < player.x + player.width && zombieXPos + this.width > player.x && zombieYPos < player.y + player.height - 20 && zombieYPos - 5 + this.height > player.y) {
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









// const numInfected = 3;
// let zombies = [];
// function infectThem() {
//     for (let i = 0; i < numInfected; i++) {
//         zombies[i] = new Infected(infectedZombie.x, infectedZombie.y, infectedZombie.width, infectedZombie.height)
//     }
// }
// function Infected(x, y, width, height) {
//     this.x = Math.floor(Math.random() * 480) + 50;
//     this.y = Math.floor(Math.random() * 150) - 250;
//     this.width = width;
//     this.height = height;

//     this.show = function () {
//         ctx.drawImage(infectedImage, this.x, this.y, this.width, this.height)
//         // console.log(infectedImage)
//     }
//     this.fall = function () {
//         if (this.y > canvas.height) {
//             // reset drop in
//             this.x = Math.floor(Math.random() * canvas.width) + 5;
//             this.y = Math.floor(Math.random() * 100) - 300;
//             // this.speed = Math.floor(Math.random() * 12) + 4;
//         }
//         else if (zombieCollisionCheck(this.x, this.y)) {
//             // idEl('game-over').style.display = 'inline-block'; 

//         }
//         else {
//             //drop zombie
//             // this.x += Math.floor(Math.random() * -1) + 1 
//             this.y += infectedZombie.speed
//         }
//     }
// }