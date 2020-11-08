const root = getEl("root", true);

const headline = document.createElement('h1');
headline.innerText = 'Covid Chaos'
root.appendChild(headline);

const startButton = document.createElement('button')
startButton.innerHTML = "Start Game!"
startButton.addEventListener('click', () => {
    console.log("starting game")
    startGame();
})

const timer = document.createElement('h1');
timer.id = "timer"
root.appendChild(timer)

document.body.appendChild(startButton)


