
// DIGITAL CLOCK AND DATE

// Update the digital clock with the user's local time.
function updateClock() {

    // Create a new Date object.
    let currentDate = new Date();

    // Get the current hours, minutes, and seconds.
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    // Set the session to AM by default.
    let session = "AM";

    // Change the session to PM for afternoon and evening.
    if (hours >= 12) {
        session = "PM";
    }

    // Convert 24-hour time to 12-hour time.
    hours = hours % 12;

    // Display 12 instead of 0 at midnight and noon.
    if (hours === 0) {
        hours = 12;
    }

    // Add leading zeros to single-digit hours.
    if (hours < 10) {
        hours = "0" + hours;
    }

    // Add leading zeros to single-digit minutes.
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    // Add leading zeros to single-digit seconds.
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // Format the time as HH:MM:SS AM/PM.
    let timeString = hours + ":" + minutes + ":" + seconds + " " + session;

    // Get the current date in a readable format.
    let dateString = currentDate.toLocaleDateString();

    // Display the time on the webpage.
    document.getElementById("clock-face").innerHTML = timeString;

    // Display the current date on the webpage.
    document.getElementById("calendar-date").innerHTML = dateString;
}

// Display the time and date immediately when the page loads.
updateClock();

// Update the clock every 1000 milliseconds (1 second).
setInterval(updateClock, 1000);
