let weatherKey = 'B9SFWPG5BVS9YE7U9SKV2PSJZ';
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
// async function getGifs(temp) {
//   const response = await fetch(
//     `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=${unit}&key=${weatherKey}`
//   );
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   const data = await response.json();
//   console.log(data);
//   return data;
// }
export { getWeather };
