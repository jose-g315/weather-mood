import { getWeather } from './api';
import { renderWeather, renderError } from './dom';
import { getWeatherDetails } from './weather-logic';

const weatherDetails = document.querySelector('.weatherDetails');
const form = document.querySelector('form');
const input = document.querySelector('input');

async function bindEvents() {
  form.addEventListener('submit', handleFormSubmit);
  weatherDetails.addEventListener('click', handleButtonClicks);
}

function handleButtonClicks(e) {
  const button = e.target.closest('button');
  if (!button) return;
  const action = button.dataset.action;
  switch (action) {
    case 'c':
      handleFormSubmit(e, 'metric');
      break;
    case 'f': {
      handleFormSubmit(e);
      break;
    }
  }
}

async function handleFormSubmit(e, mode = 'us') {
  e.preventDefault();
  const city = input.value.trim();
  try {
    const weather = await getWeather(city, mode);
    const weatherObject = getWeatherDetails(weather);
    console.log(weatherObject);
    renderWeather(weatherObject);
  } catch (error) {
    renderError(error);
    console.log(error);
  }
}

export { bindEvents };
