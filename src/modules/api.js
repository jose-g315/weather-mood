const weatherKey = 'B9SFWPG5BVS9YE7U9SKV2PSJZ';
async function getWeather(city, unit) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=${unit}&key=${weatherKey}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  console.log(data);
  return data;
}
const gifKey = 'KzrCrxlBI85zCDCy7xXUrQ2UsrFRjJLX';
async function getGifs(search) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${gifKey}&q=${search}&limit=20&rating=g`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  console.log(data);
  return data;
}
export { getWeather, getGifs };
