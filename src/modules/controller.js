import { getGifs, getWeather } from './api';
import { renderWeather, renderError, renderGifs } from './dom';
import { getWeatherDetails, getGifUrl, getTemp } from './data-processing';
import { getSearchTerm } from './utility';

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

function handleFormSubmit(e, mode) {
  e.preventDefault();
  getWeatherAndGifs(mode);
}
async function getWeatherAndGifs(mode = 'us') {
  const city = input.value.trim();
  try {
    const weather = await getWeather(city, mode);
    const weatherObject = getWeatherDetails(weather, mode);
    renderWeather(weatherObject, mode);

    const gifPromise = getGifs(getSearchTerm(getTemp()));

    const gifData = await gifPromise;
    const gifUrl = getGifUrl(gifData);
    renderGifs(gifUrl);
  } catch (error) {
    renderError(error);
    console.log(error);
  }
}

export { bindEvents };
