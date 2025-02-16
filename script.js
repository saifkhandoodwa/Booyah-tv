<script>
// Booyah TV Interactive Features

document.addEventListener("DOMContentLoaded", function () {
    console.log("Booyah TV Loaded");

    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Simulated Data Fetching for Streams, Voice Rooms, and Clubs
    setTimeout(() => {
        document.getElementById("stream-container").innerHTML = "<h2>Live Streams</h2><p>🔥 Trending Now: Streamer1, Streamer2, Streamer3</p>";
    }, 1000);

    setTimeout(() => {
        document.getElementById("voice-container").innerHTML = "<h2>Voice Rooms</h2><p>🎤 Active Rooms: Room1, Room2, Room3</p>";
    }, 1500);

    setTimeout(() => {
        document.getElementById("clubs-container").innerHTML = "<h2>Clubs</h2><p>🏆 Popular Clubs: Club1, Club2, Club3</p>";
    }, 2000);
});
</script>
