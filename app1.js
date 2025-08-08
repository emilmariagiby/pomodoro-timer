const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");

let timeLeft = 2400; // 40 minutes
let interval = null; // Store interval ID

// Function to update the timer display
const updateTimer = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timer.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

// Function to start the timer
const startTimer = () => {
    if (interval !== null) return; // Prevent multiple intervals

    interval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft === 0) {
            clearInterval(interval);
            interval = null; // Reset interval
            alert("Time's up!");
            timeLeft = 2400; // Reset to 40 minutes
            updateTimer();
        }
    }, 1000);
};

// Function to stop the timer
const stopTimer = () => {
    clearInterval(interval);
    interval = null;
};

// Function to reset the timer
const resetTimer = () => {
    clearInterval(interval);
    interval = null;
    timeLeft = 2400; // Reset to 40 minutes
    updateTimer();
};

// Event listeners for buttons
start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

// Initialize timer display
updateTimer();