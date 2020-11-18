const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const weatherTitle = document.querySelector('.weather__title');
const wind = document.querySelector('.wind');

export default async function getWeather(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=4e7db382058546a9b178fd2e1c8b5ccd&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    weatherTitle.innerHTML = `Weather forecast for ${city}:`;
    console.log(data);
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `${data.wind.speed}m/s`;
  } catch (e) {
    weatherDescription.textContent = 'The weather forecast did not load.';
  }
}
