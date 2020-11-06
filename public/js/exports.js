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
