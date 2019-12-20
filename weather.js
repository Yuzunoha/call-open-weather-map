const url = 'https://api.openweathermap.org/data/2.5/weather';
const APPID = '4b5774e9f3d2a07b84f0f2f88e486224';
const cityName = 'London';
const params = new URLSearchParams();
params.set('APPID', APPID);
params.set('q', cityName);
const mainTextArea = document.getElementById('main-text-area');

const update = (weatherDescription) => {
  mainTextArea.innerHTML = `現在の${cityName}の天気は${weatherDescription}です`;
}

fetch(`${url}?${params}`)
  .then((response) => {
    return response.text();
  })
  .then((responseText) => {
    const responseObj = JSON.parse(responseText);
    const weatherDescription = responseObj.weather[0].description;
    console.log(weatherDescription);

    update(weatherDescription);
  });
