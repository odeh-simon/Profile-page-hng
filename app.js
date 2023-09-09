// JavaScript code to display the current day of the week
const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
  
  // JavaScript code to display the current UTC time in milliseconds
  const currentUTCElement = document.querySelector('[data-testid="currentUTCTime"]');
  
  function updateDateTime() {
    const currentDate = new Date();
  
    // Get the current day of the week
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
    currentDayElement.textContent = currentDay;
  
    // Get the current UTC time in milliseconds
    const currentUTCMilliseconds = currentDate.getTime();
    const currentUTC = ` ${currentUTCMilliseconds}`;
    currentUTCElement.textContent = currentUTC;
  }
  
  // Call updateDateTime immediately to display the initial values
  updateDateTime();
  
  // Update the time and day every second (1000 milliseconds)
  setInterval(updateDateTime, 1000);
  
