const getNewTopFive = () => {
    fetch(topFiveURL)
        .then(resp => resp.json())
        .then(data => {
            createTopFiveBoard(data);
        });
    document.location.reload();
}