const weatherDetails = document.querySelector('.weatherDetails');
const errorSpan = document.querySelector('span');
const imgOne = document.querySelector('.imgOne');
const imgTwo = document.querySelector('.imgTwo');

function renderGifs(urlObject) {
  imgOne.src = urlObject.urlOne;
  imgTwo.src = urlObject.urlTwo;
}

function renderWeather(weather, mode) {
  let windSpeed = null;
  let unit = null;
  switch (mode) {
    case 'metric':
      windSpeed = 'kph';
      unit = 'C';
      break;
    case 'us': {
      windSpeed = 'mph';
      unit = 'F';
      break;
    }
  }
  weatherDetails.textContent = '';
  errorSpan.textContent = '';
  const div1 = document.createElement('div');
  div1.textContent = `Weather Conditions:  ${weather.conditions}`;
  const div2 = document.createElement('img');
  let icon = weather.icon;
  div2.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${icon}.png`;
  const div3 = document.createElement('div');
  div3.textContent = weather.day;
  const div4 = document.createElement('div');
  div4.textContent = `Current Temperature:  ${weather.temp}\u00B0 ${unit}`;
  const div5 = document.createElement('div');
  div5.textContent = `Feels Like:  ${weather.feelsLike}\u00B0 ${unit}`;
  const div6 = document.createElement('div');
  div6.textContent = `Wind Speed:  ${weather.windSpeed} ${windSpeed}`;
  const div7 = document.createElement('div');
  div7.textContent = `Max Temp:  ${weather.maxTemp}\u00B0 ${unit}`;
  const div8 = document.createElement('div');
  div8.textContent = `Min Temp:  ${weather.minTemp}\u00B0 ${unit}`;

  const div9 = document.createElement('div');
  const cBtn = document.createElement('button');
  cBtn.textContent = 'Celsius';
  cBtn.dataset.action = 'c';
  const fBtn = document.createElement('button');
  fBtn.dataset.action = 'f';
  fBtn.textContent = 'Farenheit';
  div9.append(cBtn, fBtn);
  weatherDetails.append(div1, div2, div3, div4, div5, div6, div7, div8, div9);
}

function renderError(error) {
  switch (error.message) {
    case 'HTTP error! status: 400':
      errorSpan.textContent = 'Location not found.';
      break;
    default:
      errorSpan.textContent = "Hmm something didn't work.";
      break;
  }
}

export { renderWeather, renderError, renderGifs };
