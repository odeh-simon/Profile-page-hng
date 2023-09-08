function updateTime() {
    const currentTimeElement = document.getElementById('currentUTCTime');
    const currentDayElement = document.getElementById('currentDayOfTheWeek');
    const currentDate = new Date();

    // Get the current time in milliseconds
    const currentTimeMilliseconds = currentDate.getTime();

    // Get the current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];

    currentTimeElement.textContent = ` ${currentTimeMilliseconds}`;
    currentDayElement.textContent = ` ${dayOfWeek}`;
}

// Call updateTime immediately to display the time and day when the page loads
updateTime();

// Update the time and day every millisecond (1 millisecond)
setInterval(updateTime, 1);
