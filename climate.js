function getWeather() {
    const locationInput = document.getElementById('locationInput').value;
    const apiKey = '99a770160ce261fd1f738f5b685c43a4'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://home.openweathermap.org/api_keys`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Display current weather information
            displayWeather(data);
            // Fetch 5-day forecast
            fetchForecast(data.coord.lat, data.coord.lon);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Failed to fetch weather data. Please try again.');
        });
}

function displayWeather(data) {
    const weatherInfoDiv = document.getElementById('weatherInfo');
    weatherInfoDiv.innerHTML = `
        <div><strong>Location:</strong> ${data.name}, ${data.sys.country}</div>
        <div><strong>Temperature:</strong> ${data.main.temp}°C</div>
        <div><strong>Humidity:</strong> ${data.main.humidity}%</div>
        <div><strong>Description:</strong> ${data.weather[0].description}</div>
    `;
}

function fetchForecast(lat, lon) {
    const apiKey = '99a770160ce261fd1f738f5b685c43a4'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://home.openweathermap.org/api_keys`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Display 5-day forecast
            displayForecast(data.list);
        })
        .catch(error => {
            console.error('Error fetching forecast:', error);
            alert('Failed to fetch forecast data. Please try again.');
        });
}

function displayForecast(forecastData) {
    const weatherInfoDiv = document.getElementById('weatherInfo');
    const forecastDiv = document.createElement('div');
    forecastDiv.innerHTML = '<h2>5-Day Forecast:</h2>';

    forecastData.forEach((item, index) => {
        if (index % 8 === 0) { // Each day has 8 data points (every 3 hours), so we take one point per day
            const date = new Date(item.dt * 1000);
            const dateString = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
            const forecastItem = `
                <div>
                    <strong>${dateString}:</strong>
                    <span> ${item.weather[0].description}, ${item.main.temp}°C</span>
                </div>
            `;
            forecastDiv.innerHTML += forecastItem;
        }
    });

    weatherInfoDiv.appendChild(forecastDiv);
}
function getWeather() {
    const locationInput = document.getElementById('locationInput').value;
    const apiKey = '99a770160ce261fd1f738f5b685c43a4'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://home.openweathermap.org/api_keys`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Display current weather information
            displayWeather(data);
            // Fetch 5-day forecast
            fetchForecast(data.coord.lat, data.coord.lon);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Failed to fetch weather data. Please try again.');
        });
}

function displayWeather(data) {
    const weatherInfoDiv = document.getElementById('weatherInfo');
    weatherInfoDiv.innerHTML = `
        <div><strong>Location:</strong> ${data.name}, ${data.sys.country}</div>
        <div><strong>Temperature:</strong> ${data.main.temp}°C</div>
        <div><strong>Humidity:</strong> ${data.main.humidity}%</div>
        <div><strong>Description:</strong> ${data.weather[0].description}</div>
    `;
}

function fetchForecast(lat, lon) {
    const apiKey = '99a770160ce261fd1f738f5b685c43a4'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://home.openweathermap.org/api_keys`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Display 5-day forecast
            displayForecast(data.daily);
        })
        .catch(error => {
            console.error('Error fetching forecast:', error);
            alert('Failed to fetch forecast data. Please try again.');
        });
}

function displayForecast(forecastData) {
    const weatherInfoDiv = document.getElementById('weatherInfo');
    const forecastDiv = document.createElement('div');
    forecastDiv.innerHTML = '<h2>5-Day Forecast:</h2>';

    forecastData.slice(1, 6).forEach(day => {
        const date = new Date(day.dt * 1000);
        const dateString = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
        const forecastItem = `
            <div>
                <strong>${dateString}:</strong>
                <span> ${day.weather[0].description}, ${day.temp.day}°C</span>
            </div>
        `;
        forecastDiv.innerHTML += forecastItem;
    });

    weatherInfoDiv.appendChild(forecastDiv);
}