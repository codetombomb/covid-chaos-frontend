const getEl = (el, cl = false) => {
    if (cl) {
        return document.getElementsByClassName(el)[0];
    } else {
        return document.getElementById(el)
    }
};

