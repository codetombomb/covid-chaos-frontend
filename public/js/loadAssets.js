// INITIALIZE SOUND EFFECTS AND MUSIC
//sneeze sfx
const sneeze = new Audio();
sneeze.src = "../assets/audio/sneezing.mp3"
//main music
const mainMusic = new Audio();
mainMusic.src = "assets/audio/main-music.mp3"
// end game sound effect
const cough = new Audio();
cough.src = "assets/audio/cough.wav"
// collect toilet paper
const collectTp = new Audio();
collectTp.src = "assets/audio/collect-tp.wav"
//collect sanitizer
const collectSanitizer = new Audio();
collectSanitizer.src = "assets/audio/collect-sanitizer.wav"

// INITIALIZE SPRITES
// load player sprite
let playerLoaded = false;
const playerImage = new Image();
playerImage.onload = function () {
    playerLoaded = true;
};
playerImage.src = "assets/sprites/covid-player.png";

// load virus sprite
let virusLoaded = false;
const virusImage = new Image();
virusImage.onload = function () {
    virusLoaded = true;
};
virusImage.src = "assets/sprites/covid-virus.png";

//load zombie sprite
let infectedLoaded = false;
const infectedImage = new Image();
infectedImage.onload = function () {
    infectedLoaded = true;
};
infectedImage.src = "assets/sprites/infected.png";

//load toilet paper sprite
let tpLoaded = false;
const tpImage = new Image();
tpImage.onload = function () {
    tpLoaded = true;
};
tpImage.src = "assets/sprites/toilet-paper.png"

// load hand sanitizer sprite
let sanitizerLoaded = false;
const sanitizerImage = new Image();
sanitizerImage.onload = function () {
    sanitizerLoaded = true;
};
sanitizerImage.src = "assets/sprites/hand-sanitizer.png";


let allPlayersURL = 'http://localhost:3001/players';
let allGames = 'http://localhost:3001/games'

document.addEventListener('DOMContentLoaded', () => {
    fetch(allPlayersURL)
        .then(resp => resp.json())
        .then(data => console.log(data))
});