function countdownTimer() {
    var countdown = document.getElementById('countdown-timer');
    var countdown_interval = setInterval(function() {
        var countdown_time = countdown.textContent;
        var time_array = countdown_time.split(':');
        var seconds = time_array[2];
        var minutes = time_array[1];
        var hours = time_array[0];
        
        if(seconds == 0) {
            if(minutes == 0) {
                if(hours == 0) {
                    clearInterval(countdown_interval);
                } else {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                }
            } else {
                minutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }
        
        countdown.textContent = hours.toString().padStart(2, '0') + ':' +
                                 minutes.toString().padStart(2, '0') + ':' +
                                 seconds.toString().padStart(2, '0');
    }, 1000);
}
document.addEventListener('DOMContentLoaded', function() {
    countdownTimer();
});