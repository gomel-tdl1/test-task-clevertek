import showTime from './utils/showTime.js';
import showDayOfWeek from './utils/showDay.js';
import setBgGreet from './utils/setBackgroungs.js';
import getWeather from './utils/getWeather.js';

window.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const name = document.querySelector('.name');
  const focus = document.querySelector('.focus');

  // Options
  const showAmPm = false;

  // Get Name
  function getName() {
    if (localStorage.getItem('name') === null) {
      name.textContent = '[Enter Name]';
    } else {
      name.textContent = localStorage.getItem('name');
    }
  }

  // Set Name
  function setName(e) {
    const mes = localStorage.getItem('name');
    if (e.type === 'keypress') {
      // Make sure enter is pressed
      if (e.which == 13 || e.keyCode == 13) {
        if (!name.textContent) name.textContent = mes;
        localStorage.setItem('name', e.target.innerText);
        name.blur();
      }
    } else if (e.type === 'click') {
      if (name.textContent === '[Enter Name]') name.textContent = '';
    } else {
      localStorage.setItem('name', e.target.innerText);
    }
  }

  // Get Focus
  function getFocus() {
    if (localStorage.getItem('focus') === null) {
      focus.textContent = '[Enter Focus]';
    } else {
      focus.textContent = localStorage.getItem('focus');
    }
  }

  // Set Focus
  function setFocus(e) {
    const mes = localStorage.getItem('focus');
    if (e.type === 'keypress') {
      // Make sure enter is pressed
      if (e.which == 13 || e.keyCode == 13) {
        if (!focus.textContent) focus.textContent = mes;
        localStorage.setItem('focus', e.target.innerText);
        focus.blur();
      }
    } else if (e.type === 'click') {
      if (focus.textContent === '[Enter Focus]') focus.textContent = '';
    } else {
      localStorage.setItem('focus', e.target.innerText);
    }
  }

  // Get quote
  const quote = document.querySelector('.quote__text');
  const author = document.querySelector('.quote__author');
  const buttonQuote = document.querySelector('.quote__button');
  async function getQuote() {
    try {
      const url = 'https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';
      const res = await fetch(url);
      const data = await res.json();
      quote.textContent = data.quoteText;
      author.textContent = data.quoteAuthor;
    } catch (e) {
      quote.textContent = 'One who is too insistent on his own views, finds few to agree with him.';
      author.textContent = 'Lao Tzu';
    }
  }

  // Set location
  const city = document.querySelector('.city');
  function getCity() {
    if (localStorage.getItem('city') === null) {
      city.textContent = '[Enter City]';
    } else {
      city.textContent = localStorage.getItem('city');
    }
  }
  function setCity(e) {
    const mes = localStorage.getItem('city');
    if (e.type === 'keypress') {
      // Make sure enter is pressed
      if (e.which == 13 || e.keyCode == 13) {
        if (!city.textContent) city.textContent = mes;
        localStorage.setItem('city', e.target.innerText);
        getWeather(city.textContent);
        city.blur();
      }
    } else if (e.type === 'click') {
      if (city.textContent === '[Enter City]') city.textContent = '';
    } else {
      localStorage.setItem('city', e.target.innerText);
    }
  }

  // Listeners all
  name.addEventListener('click', setName);
  name.addEventListener('keypress', setName);
  name.addEventListener('blur', setName);
  focus.addEventListener('click', setFocus);
  focus.addEventListener('keypress', setFocus);
  focus.addEventListener('blur', setFocus);
  buttonQuote.addEventListener('click', getQuote);
  city.addEventListener('keypress', setCity);
  city.addEventListener('click', setCity);
  city.addEventListener('blur', setCity);

  // Run
  showTime(showAmPm);
  showDayOfWeek();
  setBgGreet();
  getName();
  getFocus();
  getCity();
  getQuote();
  getWeather(city.textContent);
});
