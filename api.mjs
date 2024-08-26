// api.js
const apiKey = '8a074efc74a3223c645235133cc823c6';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

export async function fetchWeatherData(city) {
    try {
        const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching the weather data:', error);
        throw error;
    }
}