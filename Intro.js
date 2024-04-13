function handlePlayerClick(playerId) {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.display = "flex"; // Show the loading screen

    const playerElement = document.getElementById(playerId);
    const destinationLink = playerElement.getAttribute("data-link");

    // Simulate a delay of 5 seconds before redirecting
    setTimeout(function() {
        window.location.href = destinationLink; // Redirect to the destination page
    }, 4000); // 4000 milliseconds = 4 seconds
}

// Add click event listeners for all players
const players = document.querySelectorAll('.member');
players.forEach(function(player) {
    player.addEventListener('click', function() {
        handlePlayerClick(this.id);
    });
});