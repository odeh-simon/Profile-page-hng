function updateTime() {
    const dateTimeContainer = document.getElementById('dateTimeContainer');
    const currentDate = new Date();

    // Get the current time in milliseconds
    const currentTimeMilliseconds = currentDate.getTime();

    // Get the current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];

    // Format the current time in milliseconds and day of the week
    const formattedDateTime = `${dayOfWeek} ${currentTimeMilliseconds}`;

    // Set the text content of the dateTimeContainer
    dateTimeContainer.textContent = formattedDateTime;
}

// Call updateTime immediately to display the time and day when the page loads
updateTime();

// Update the time and day every millisecond (1 millisecond)
setInterval(updateTime, 1);
