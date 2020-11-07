const getEl = (el, cl = false) => {
    if (cl) {
        return document.getElementsByClassName(el)[0];
    } else {
        return document.getElementById(el)
    }
};

const player = {
    x: canvas.width / 10,
    y: canvas.height / 10 * 8,
    speed: 200,
    width: 45,
    height: 45
}

const virusAttrs = {
    x: Math.floor(Math.random() * 580),         //555 
    y: Math.floor(Math.random() * 100) - 100,    // 368
    speed: Math.floor(Math.random() * 7) + 2,
    width: 25,
    height: 25,
    quantity: 8,
    store: []
}



