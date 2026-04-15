document.addEventListener('DOMContentLoaded', () => {
    fetch(topFiveURL)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            createTopFiveBoard(data);
        })
});


