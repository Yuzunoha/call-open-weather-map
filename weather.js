const url = 'https://api.openweathermap.org/data/2.5/weather';

const params = new URLSearchParams();
params.set('APPID', '4b5774e9f3d2a07b84f0f2f88e486224');
params.set('q', 'London');

fetch(`${url}?${params}`)
  .then((response) => {
    return response.text();
  })
  .then((responseText) => {
    const responseObj = JSON.parse(responseText);
    const weatherDescription = responseObj.weather[0].description;
    console.log(weatherDescription);
  });

const mainTextArea = document.getElementById('main-text-area');
mainTextArea.innerHTML = 'JSから書きました';

