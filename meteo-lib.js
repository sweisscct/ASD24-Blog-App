import { fetchWeatherApi } from 'openmeteo';
// const {fetchWeatherApi} = require('openmeteo');


//  53.349805,-6.26031
//  hourly=temperature_2m,rain,cloud_cover,soil_temperature_0cm
const params = {
	"latitude": 53.349805,
	"longitude": -6.26031,
    "hourly": "temperature_2m,rain,cloud_cover,soil_temperature_0cm"
};
const url = "https://api.open-meteo.com/v1/forecast";
const responses = await fetchWeatherApi(url, params);

// Process first location. Add a for-loop for multiple locations or weather models
const response = responses[0];

// console.log(responses[0]);

console.log(response.hourly())

// Attributes for timezone and location
const utcOffsetSeconds = response.utcOffsetSeconds();
const timezone = response.timezone();
const timezoneAbbreviation = response.timezoneAbbreviation();
const latitude = response.latitude();
const longitude = response.longitude();

console.log(latitude)
console.log(longitude)

// Note: The order of weather variables in the URL query and the indices below need to match!
const weatherData = {
};

// `weatherData` now contains a simple structure with arrays for datetime and weather data

