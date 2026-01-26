function getWeatherDetails(weather) {
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

export { getWeatherDetails };
