function updateTime() {
    const dateTimeElement = document.getElementById('currentUTCTime');
    const currentDate = new Date();

    // Get the current UTC time in hours and minutes
    const hours = String(currentDate.getUTCHours()).padStart(2, '0');
    const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0');

    // Get the current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];

    // Format the current UTC time as hours:minutes
    const formattedTime = `${hours}:${minutes}`;

    // Set the text content of dateTimeElement to include day of the week and time
    dateTimeElement.textContent = ` ${dayOfWeek},  ${formattedTime}`;
}

// Call updateTime immediately to display the time and day when the page loads
updateTime();

// Update the time and day every minute (60000 milliseconds)
setInterval(updateTime, 60000);
