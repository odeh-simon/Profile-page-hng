function updateTime() {
    const currentTimeElement = document.getElementById('currentUTCTime');
    const currentDayElement = document.getElementById('currentDayOfTheWeek');
    const currentDate = new Date();

    // Get the current UTC time
    const utcTimeString = currentDate.toISOString().split('T')[1].split('.')[0];
    
    // Get the current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];

    currentTimeElement.textContent = ` ${utcTimeString}`;
    currentDayElement.textContent = ` ${dayOfWeek}`;
}

// Call updateTime immediately to display the time when the page loads
updateTime();

// Update the time every second (1000 milliseconds)
setInterval(updateTime, 1000);
