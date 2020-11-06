const main = getEl("root", true);

let headline = document.createElement('h1');
headline.innerText = 'Covid Chaos'
main.appendChild(headline);

const startButton = document.createElement('button')
startButton.innerHTML = "Start Game!"
startButton.addEventListener('click', () => {
    console.log("starting game")
    startGame();
})
document.body.appendChild(startButton)


