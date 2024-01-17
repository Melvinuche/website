let countdown;

function updateCountdown() {
    let days = Math.floor(countdown / (1000 * 60 * 60 * 24));
    let hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((countdown % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    if (countdown <= 0) {
        clearInterval(interval);
    }

    countdown -= 1000;
}

function startCountdown(seconds) {
    countdown = seconds * 1000;
    updateCountdown();
    let interval = setInterval(updateCountdown, 1000);
}

startCountdown(10); // Start a 10-second countdown