// Function to get the current time in Bangladesh time zone
function getBangladeshTime() {
    const now = new Date();
    const options = { timeZone: 'Asia/Dhaka' };
    return now.toLocaleString('en-US', options);
}

// Function to set background image and greeting based on time
function setBackgroundAndGreeting() {
    const currentHour = new Date().getHours();
    let timeOfDay, greeting;
    if (currentHour >= 5 && currentHour < 12) {
        timeOfDay = 'morning';
        greeting = 'Good morning 🌅';
    } else if (currentHour >= 12 && currentHour < 18) {
        timeOfDay = 'noon';
        greeting = 'Good afternoon ☀️';
    } else if (currentHour >= 18 && currentHour < 20) {
        timeOfDay = 'evening';
        greeting = 'Good evening 🌆';
    } else {
        timeOfDay = 'night';
        greeting = 'Good night 🌙';
    }
    document.querySelector('.container').classList = `container ${timeOfDay}`;
    document.getElementById('greeting').textContent = greeting;
}

// Function to update the Bangladesh time every second
function updateTime() {
    document.getElementById('bd-time').textContent = `Bangladesh Time: ${getBangladeshTime()}`;
}

// Call the setBackgroundAndGreeting function initially and every minute to update based on the time
setBackgroundAndGreeting();
setInterval(setBackgroundAndGreeting, 60000); // Update every minute
setInterval(updateTime, 1000); // Update time every second
