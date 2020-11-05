const getEl = (el, cl = false) => {
    if (cl) {
        console.log('returning a class')
        return document.getElementsByClassName(el)[0];
    } else {
        console.log('returning an id element')
        return document.getElementById(el)
    }
};

const main = getEl("main", true);
let headline = document.createElement('h1');
headline.innerText = 'Hello Tom!'
main.appendChild(headline);

