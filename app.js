function updateTime() {
    const currentLocalTimeElement = document.getElementById('currentUTCTime');
    const currentMillisElement = document.getElementById('currentUTCTimeInMillisecond');
    const currentDayElement = document.getElementById('currentDayOfTheWeek');
    const currentDate = new Date();

    // Calculate the local time zone offset for Nigeria (WAT)
    const nigeriaOffsetMinutes = 60;
    const nigeriaOffsetMilliseconds = nigeriaOffsetMinutes * 60 * 1000;

    // Adjust the current time by adding the Nigeria offset
    const localTimeMilliseconds = currentDate.getTime() + nigeriaOffsetMilliseconds;

    // Format the local time as hours:minutes:seconds
    const localDate = new Date(localTimeMilliseconds);
    const hours = String(localDate.getUTCHours()).padStart(2, '0');
    const minutes = String(localDate.getUTCMinutes()).padStart(2, '0');
    const seconds = String(localDate.getUTCSeconds()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    // Get the current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[localDate.getUTCDay()];

    currentLocalTimeElement.textContent = ` ${formattedTime}`;
    currentMillisElement.textContent = ` ${localTimeMilliseconds}`;
    currentDayElement.textContent = ` ${dayOfWeek}`;
}

// Call updateTime immediately to display the time when the page loads
updateTime();

// Update the time every second (1000 milliseconds)
setInterval(updateTime, 1000);
