import { getWeather } from './api';
import { getWeatherDetails } from './weather-logic';

async function bindEvents() {
  try {
    const weather = await getWeather('Dallas', 'metric');
    const weatherObject = getWeatherDetails(weather);
    console.log(weatherObject);
  } catch (error) {
    console.log(error);
  }
}

export { bindEvents };
