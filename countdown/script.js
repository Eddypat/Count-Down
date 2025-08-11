let countdown;
let endTime;

// DOM Elements
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const startButton = document.getElementById('startBtn');
const resetButton = document.getElementById('resetBtn');

// Start a 24-hour countdown from current time
function startCountdown() {
    // Clear any existing countdown
    clearInterval(countdown);
    
    // Set end time to 24 hours from now
    const now = new Date();
    endTime = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    
    // Update immediately
    updateDisplay();
    
    // Update every second
    countdown = setInterval(updateDisplay, 1000);
    
    // Disable start button during countdown
    startButton.disabled = true;
}

// Reset the countdown
function resetCountdown() {
    clearInterval(countdown);
    hoursElement.textContent = '00';
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
    startButton.disabled = false;
}

// Update the display with remaining time
function updateDisplay() {
    const now = new Date();
    const remaining = endTime - now;
    
    // If countdown has finished
    if (remaining <= 0) {
        resetCountdown();
        alert("Countdown finished!");
        return;
    }
    
    // Calculate hours, minutes, seconds
    const hours = Math.floor(remaining / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
    
    // Display the values with leading zeros
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
}

// Event Listeners
startButton.addEventListener('click', startCountdown);
resetButton.addEventListener('click', resetCountdown);