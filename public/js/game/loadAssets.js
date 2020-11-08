// INITIALIZE SOUND EFFECTS AND MUSIC
//sneeze sfx
const sneeze = new Audio();
sneeze.src = "../assets/audio/sneezing.mp3"
//main music
const mainMusic = new Audio();
mainMusic.src = "../assets/audio/main-music.mp3"
// end game sound effect
const cough = new Audio();
cough.src = "../assets/audio/cough.wav"
// collect toilet paper
const collectTp = new Audio();
collectTp.src = "../assets/audio/collect-tp.wav"
//collect sanitizer
const collectSanitizer = new Audio();
collectSanitizer.src = "../assets/audio/collect-sanitizer.wav"

// INITIALIZE SPRITES
// load player sprite
let playerLoaded = false;
const playerImage = new Image();
playerImage.onload = function () {
    playerLoaded = true;
};
playerImage.src = "../assets/sprites/covid-player.png";

// load virus sprite
let virusLoaded = false;
const virusImage = new Image();
virusImage.onload = function () {
    virusLoaded = true;
};
virusImage.src = "../assets/sprites/covid-virus.png";

//load zombie sprite
let zombieLoaded = false;
const zombieImage = new Image();
zombieImage.onload = function () {
    zombieLoaded = true;
};
zombieImage.src = "../assets/sprites/infected.png";

//load toilet paper sprite
let tpLoaded = false;
const tpImage = new Image();
tpImage.onload = function () {
    tpLoaded = true;
};
tpImage.src = "../assets/sprites/toilet-paper.png"

// load hand sanitizer sprite
let sanitizerLoaded = false;
const sanitizerImage = new Image();
sanitizerImage.onload = function () {
    sanitizerLoaded = true;
};
sanitizerImage.src = "../assets/sprites/hand-sanitizer.png";

//load background image
let bgLoaded = false;
const bgImage = new Image();
bgImage.onload = function () {
    bgLoaded = true;
};
bgImage.src = "../assets/background/coronavirus-bg.jpg";
