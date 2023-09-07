    function updateCurrentTime() {
        const currentDay = new Date();
        const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayOfTheWeek = daysOfTheWeek[currentDay.getDay()];

        // Format the current time as HH:MM:SS
        const currentTime = currentDay.getTime() + ' UTC';

        document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = dayOfTheWeek;
        document.querySelector('[data-testid="currentUTCTime"]').textContent = currentTime;
    }

    // Call the updateCurrentTime function initially and then update it every second
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000); // Update every 1000 milliseconds (1 second)

