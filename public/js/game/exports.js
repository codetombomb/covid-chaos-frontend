const getEl = (el, cl = false) => {
    if (cl) {
        return document.getElementsByClassName(el)[0];
    } else {
        return document.getElementById(el)
    }
};

let score = 0;

const player = {
    x: canvas.width / 10,
    y: canvas.height / 10 * 8,
    speed: 200,
    width: 45,
    height: 45
}

const virusAttrs = {
    // x: Math.floor(Math.random() * 580),
    y: Math.floor(Math.random() * 100) - 100,
    speed: Math.floor(Math.random() * 7) + 2,
    width: 25,
    height: 25,
    quantity: 8,
    store: []
}

const zombieAttrs = {
    speed: Math.floor(Math.random() * 1) + 2,
    width: 60,
    height: 60,
    quantity: 3,
    store: []
}

const sanitizerAttrs = {
    x: Math.floor(Math.random() * 555) + 1,
    y: Math.floor(Math.random() * 325) + 1,
    width: 45,
    height: 80
}

const tpAttrs = {
    x: Math.floor(Math.random() * 555) + 1,
    y: Math.floor(Math.random() * 368) + 1,
    width: 45,
    height: 30
}


