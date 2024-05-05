// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Display Bangladesh time
    function displayBdTime() {
        const bdTimeElement = document.getElementById("bd-time");
        const options = { timeZone: "Asia/Dhaka", hour12: false, hour: 'numeric', minute: 'numeric' };
        const bdTime = new Date().toLocaleTimeString('en-US', options);
        bdTimeElement.textContent = bdTime;
    }

    // Display Dinajpur temperature
    function displayDinajpurTemp() {
        // You would need to fetch the temperature data from an API
        // For demonstration purposes, let's assume the temperature is 25°C
        const dinajpurTempElement = document.getElementById("dinajpur-temp");
        dinajpurTempElement.textContent = "25";
    }

    // Set greeting based on time
    function setGreeting() {
        const now = new Date();
        const hour = now.getHours();
        let greeting;

        if (hour >= 5 && hour < 12) {
            greeting = "Good morning! ☀️";
        } else if (hour >= 12 && hour < 18) {
            greeting = "Good afternoon! 🌤️";
        } else if (hour >= 18 && hour < 20) {
            greeting = "Good evening! 🌆";
        } else {
            greeting = "Good night! 🌙";
        }

        const greetingElement = document.getElementById("greeting");
        greetingElement.textContent = greeting;
    }

    // Call functions to display time, temperature, and set greeting
    displayBdTime();
    displayDinajpurTemp();
    setGreeting();
});
