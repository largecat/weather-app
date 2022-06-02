import './style.css';
import {
  input,
  searchBtn,
  weatherDisplayArea,
  displayLocation,
  displayWeatherTemp,
  displayWeatherDesc,
  infoDesc,
  advInfo,
  sevenDayDisplay,
  leftSide,
  displayHumidity,
  displayRainChance,
  displayWind,
} from './modules/selectors';

function get7Day(weatherData) {
  sevenDayDisplay.innerHTML = '';

  let days = weatherData.daily;

  for (let i = 1; i < days.length - 1; i++) {
    let desc = days[i].weather[0].description;

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    let date = new Date(days[i].dt * 1000).getDay();
    let dayName = daysOfWeek[date];

    let minTemp = `${changeTempUnit(days[i].temp.min)}°F`;
    let maxTemp = `${changeTempUnit(days[i].temp.max)}°F`;

    let newDiv = document.createElement('div');
    newDiv.classList.add('day-display');
    let h2 = document.createElement('h2');
    h2.innerHTML = dayName;

    let iconCode = days[i].weather[0].icon;
    let icon = document.createElement('img');
    icon.classList.add('icon');
    icon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    newDiv.append(icon);

    let dayDesc = document.createElement('p');
    dayDesc.innerHTML = desc;

    let dayMinTemp = document.createElement('p');
    dayMinTemp.innerHTML = ` min: ${minTemp}`;

    let dayMaxTemp = document.createElement('p');
    dayMaxTemp.innerHTML = `max: ${maxTemp}`;

    newDiv.append(h2);
    newDiv.append(dayDesc);
    newDiv.append(dayMinTemp);
    newDiv.append(dayMaxTemp);

    sevenDayDisplay.append(newDiv);
  }
}

function displayWeather(place, weatherData) {
  console.log(weatherData);
  console.log(place);
  console.log(`asdfasdfasdf${place}`);

  let p = place.replaceAll('+', ' ').split(',', 1);

  console.log(p);

  displayLocation.textContent = p;

  let temp = changeTempUnit(weatherData.current.temp) + '°F';

  displayWeatherTemp.innerHTML = temp;

  let description = weatherData.current.weather[0].description;
  displayWeatherDesc.innerHTML = description;

  let minTemp = weatherData.daily[0].temp.min;
  advInfo.innerHTML += `<li> min: ${changeTempUnit(minTemp)}°F</li>`;

  let maxTemp = weatherData.daily[0].temp.max;
  advInfo.innerHTML += `<li> max: ${changeTempUnit(maxTemp)}°F</li>`;

  let feelsTemp = weatherData.hourly[0].feels_like;
  advInfo.innerHTML += `<li> feels like: ${changeTempUnit(feelsTemp)}°F</li>`;

  let iconCode = weatherData.current.weather[0].icon;

  const todayIcon = document.querySelector('.today-icon');
  console.log(iconCode);

  todayIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  leftSide.appendChild(todayIcon);

  let humidity = weatherData.current.humidity;
  displayHumidity.innerHTML = `humidity: ${humidity}%`;

  let windSpeed = weatherData.current.wind_speed;
  let convertedSpeed = windSpeed * 2.237;

  displayWind.innerHTML = `wind speed: ${convertedSpeed.toFixed(2)} mph`;
}

async function getWeather(place, lat, lon) {
  let apiKey = '95e4dc8196d9da275ac4f6db92770898';
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const weatherData = await response.json();

    displayWeather(place, weatherData);
    get7Day(weatherData);
  } catch (error) {
    console.log('error while looking for weather!', error);
  }
}

async function getCoord(place) {
  let apiKey = '95e4dc8196d9da275ac4f6db92770898';
  let url = `https://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=9&appid=${apiKey}`;

  try {
    let response = await fetch(url, { mode: 'cors' });
    let data = await response.json();

    let lat = data[0].lat;
    let lon = data[0].lon;
    getWeather(place, lat, lon);
  } catch (error) {
    alert('enter city in this format: "city, state, country"');
    console.log('error getting coordinates!!!!!', error);
  }
}

getCoord('morristown, nj, usa');

const changeTempUnit = function (weatherTemp) {
  return `${Math.round(((1.8 * (weatherTemp - 273) + 32) * 100) / 100)}`;
};

const searchPlace = function () {
  const place = input.value.replaceAll(' ', '+');
  console.log(place);
  getCoord(place);

  input.value = '';
};

searchBtn.addEventListener('click', () => {
  console.log('search clicked');
  resetDisplay();

  searchPlace();
});

input.addEventListener('keyup', (e) => {
  e.preventDefault();
  if (e.keyCode === 13) {
    searchBtn.click();
  }
});

const resetDisplay = function () {
  displayLocation.textContent = '';
  displayWeatherTemp.textContent = '';
  displayWeatherDesc.textContent = '';
  advInfo.textContent = '';
};
