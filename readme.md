<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App - README</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 20px;
            background-color: #f4f4f4;
        }
        h1, h2, h3 {
            color: #333;
        }
        pre {
            background: #333;
            color: #fff;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
        code {
            background: #eee;
            padding: 2px 4px;
            border-radius: 3px;
        }
    </style>
</head>
<body>
    <h1>Weather App</h1>
    <p>A simple weather application that allows users to search for the current weather in any city. The app fetches data from the OpenWeatherMap API and displays the weather information, including temperature, description, and an icon representing the weather condition.</p>

    <h2>Features</h2>
    <ul>
        <li>Search for weather information by city name.</li>
        <li>Display city name, temperature, weather description, and weather icon.</li>
        <li>Show different background colors based on weather conditions (sunny, cloudy, rainy, snowy).</li>
        <li>Error handling for invalid city names.</li>
        <li>Loading indicator while fetching data.</li>
    </ul>

    <h2>Technologies Used</h2>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript (ES6 modules)</li>
        <li>OpenWeatherMap API</li>
    </ul>

    <h2>Getting Started</h2>

    <h3>Prerequisites</h3>
    <ul>
        <li>A modern web browser that supports ES6 modules.</li>
        <li>Internet connection to fetch weather data from the OpenWeatherMap API.</li>
    </ul>

    <h3>Installation</h3>
    <ol>
        <li>Clone the repository to your local machine:
            <pre><code>git clone https://github.com/your-username/weather-app.git</code></pre>
        </li>
        <li>Navigate to the project directory:
            <pre><code>cd weather-app</code></pre>
        </li>
        <li>Open <code>index.html</code> in your web browser.</li>
    </ol>

    <h3>Usage</h3>
    <ol>
        <li>Enter the name of the city you want to search for in the input field.</li>
        <li>Click the "Search" button.</li>
        <li>The weather information for the specified city will be displayed, including the city name, temperature, weather description, and an icon representing the weather condition.</li>
        <li>If the city is not found, an error message will be displayed.</li>
    </ol>

    <h2>Project Structure</h2>
    <pre><code>
weather-app/
│
├── api.mjs
├── script.mjs
├── ui.mjs
├── index.html
├── styles.css
└── README.md
    </code></pre>
    <ul>
        <li><code>api.mjs</code>: Contains the function to fetch weather data from the OpenWeatherMap API.</li>
        <li><code>script.mjs</code>: Main script that handles user interactions and updates the UI.</li>
        <li><code>ui.mjs</code>: Contains functions to update the UI and handle errors.</li>
        <li><code>index.html</code>: The main HTML file for the application.</li>
        <li><code>styles.css</code>: The CSS file for styling the application.</li>
        <li><code>README.md</code>: This README file.</li>
    </ul>

    <h2>API Key</h2>
    <p>The application uses the OpenWeatherMap API to fetch weather data. You need an API key to use this service. Replace the placeholder API key in <code>api.mjs</code> with your own API key.</p>
    <pre><code>const apiKey = 'YOUR_API_KEY_HERE';</code></pre>
    <p>You can obtain an API key by signing up at <a href="https://home.openweathermap.org/users/sign_up" target="_blank">OpenWeatherMap</a>.</p>

    <h2>License</h2>
    <p>This project is licensed under the MIT License. See the <code>LICENSE</code> file for details.</p>

    <h2>Acknowledgements</h2>
    <ul>
        <li><a href="https://openweathermap.org/" target="_blank">OpenWeatherMap</a> for providing the weather data API.</li>
        <li><a href="https://unsplash.com/" target="_blank">Unsplash</a> for the background image.</li>
    </ul>
</body>
</html>