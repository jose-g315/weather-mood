const weatherDetails = document.querySelector('.weatherDetails');
const errorSpan = document.querySelector('span');
const imgOne = document.querySelector('.imgOne');
const imgTwo = document.querySelector('.imgTwo');

function renderGifs(urlObject) {
  imgOne.src = urlObject.urlOne;
  imgTwo.src = urlObject.urlTwo;
}

function renderWeather(weather) {
  weatherDetails.textContent = '';
  errorSpan.textContent = '';
  const div1 = document.createElement('div');
  div1.textContent = `Weather Conditions: ${weather.conditions}`;
  const div2 = document.createElement('div');
  div2.textContent = weather.icon;
  const div3 = document.createElement('div');
  div3.textContent = weather.day;
  const div4 = document.createElement('div');
  div4.textContent = weather.temp;
  const div5 = document.createElement('div');
  div5.textContent = weather.feelsLike;
  const div6 = document.createElement('div');
  div6.textContent = weather.windSpeed;
  const div7 = document.createElement('div');
  div7.textContent = weather.maxTemp;
  const div8 = document.createElement('div');
  div8.textContent = weather.minTemp;

  const cBtn = document.createElement('button');
  cBtn.textContent = 'Celsius';
  cBtn.dataset.action = 'c';
  const fBtn = document.createElement('button');
  fBtn.dataset.action = 'f';
  fBtn.textContent = 'Farenheit';

  weatherDetails.append(
    div1,
    div2,
    div3,
    div4,
    div5,
    div6,
    div7,
    div8,
    cBtn,
    fBtn
  );
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

// conditions: weather.currentConditions.conditions,
// icon: weather.currentConditions.icon,
// day: weather.days[0].datetime,
// temp: weather.currentConditions.temp,
// feelsLike: weather.currentConditions.feelslike,
// windSpeed: weather.currentConditions.windspeed,
// maxTemp: weather.days[0].tempmax,
// minTemp: weather.days[0].tempmin,
