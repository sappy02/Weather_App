// script.js
import { fetchWeatherData } from './api.mjs';
import { updateWeatherInfo, showError, showLoading, hideLoading } from './ui.mjs';

document.getElementById('search-btn').addEventListener('click', async function() {
    const city = document.getElementById('city-input').value;
    if (!city) {
        showError('Please enter a city name');
        return;
    }
    showLoading();
    try {
        const data = await fetchWeatherData(city);
        updateWeatherInfo(data);
    } catch (error) {
        showError('City not found');
    } finally {
        hideLoading();
    }
});