// ui.js
export function updateWeatherInfo(data) {
    document.getElementById('city-name').textContent = data.name;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('weather-icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">`;

    const weatherInfo = document.querySelector('.weather-info');
    weatherInfo.style.display = 'block';

    // Remove previous weather class
    weatherInfo.classList.remove('sunny', 'cloudy', 'rainy', 'snowy');

    // Add new weather class based on description
    const description = data.weather[0].description.toLowerCase();
    if (description.includes('clear')) {
        weatherInfo.classList.add('sunny');
    } else if (description.includes('clouds')) {
        weatherInfo.classList.add('cloudy');
    } else if (description.includes('rain')) {
        weatherInfo.classList.add('rainy');
    } else if (description.includes('snow')) {
        weatherInfo.classList.add('snowy');
    }
}

export function showError(message) {
    const errorElement = document.getElementById('error-message');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

export function showLoading() {
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'block';
}

export function hideLoading() {
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'none';
}