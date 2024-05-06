// Function to get the current time in Bangladesh time zone
function getBangladeshTime() {
    const now = new Date();
    const options = { timeZone: 'Asia/Dhaka' };
    return now.toLocaleString('en-US', options);
}

// Function to get the current temperature in Dinajpur
async function getDinajpurTemperature() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Dinajpur&appid=YOUR_API_KEY&units=metric');
        const data = await response.json();
        return data.main.temp;
    } catch (error) {
        console.error('Error fetching Dinajpur temperature:', error);
        return 'N/A';
    }
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

// Function to update the Dinajpur temperature every minute
async function updateTemperature() {
    const temperature = await getDinajpurTemperature();
    document.getElementById('dinajpur-temp').textContent = `Dinajpur Temperature: ${temperature}°C`;
}

// Call the functions initially and schedule updates
setBackgroundAndGreeting();
updateTime();
updateTemperature();
setInterval(updateTime, 1000); // Update time every second
setInterval(updateTemperature, 60000); // Update temperature every minute
