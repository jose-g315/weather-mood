let temp = null;
function getTemp() {
  return temp;
}

function getWeatherDetails(weather, mode) {
  /* only saving temp from us mode so that only one
  value is passed to the search term utility function */
  if (mode === 'us') {
    temp = weather.currentConditions.temp;
  }
  console.log(temp);
  return {
    conditions: weather.currentConditions.conditions,
    icon: weather.currentConditions.icon,
    day: weather.days[0].datetime,
    temp: weather.currentConditions.temp,
    feelsLike: weather.currentConditions.feelslike,
    windSpeed: weather.currentConditions.windspeed,
    maxTemp: weather.days[0].tempmax,
    minTemp: weather.days[0].tempmin,
  };
}
function getGifUrl(gifData) {
  const len = gifData.data.length;
  // guarding in case the search results is search comes back empty
  if (len === 0) return { urlOne: null, urlTwo: null };

  return {
    urlOne: gifData.data[Math.floor(Math.random() * len)].images.original.url,
    urlTwo: gifData.data[Math.floor(Math.random() * len)].images.original.url,
  };
}

export { getWeatherDetails, getGifUrl, getTemp };
