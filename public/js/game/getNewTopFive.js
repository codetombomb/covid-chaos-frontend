const getNewTopFive = () => {
    console.log("getting new five")
    fetch(topFiveURL)
        .then(resp => resp.json())
        .then(data => {
            createTopFiveBoard(data);
        });
    document.location.reload();
}