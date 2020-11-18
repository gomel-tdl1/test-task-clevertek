const controlBg = document.querySelector('.controlBg');
const greeting = document.querySelector('.greeting');

export default function setBgGreet() {
  const today = new Date();
  const hour = today.getHours();
  let randomBg = Math.ceil(Math.random() * 20);
  if (randomBg < 10) {
    randomBg = `0${randomBg}`;
  }

  if (hour < 12 && hour > 5) {
    // Morning
    document.body.style.backgroundImage = `url(./assets/images/morning/${randomBg}.jpg)`;
    setBackground('morning', 20);
    greeting.textContent = 'Good Morning, ';
  } else if (hour < 18 && hour >= 12) {
    // Afternoon
    document.body.style.backgroundImage = `url(assets/images/day/${randomBg}.jpg)`;
    setBackground('day', 20);
    greeting.textContent = 'Good Afternoon, ';
  } else if (hour >= 18 && hour < 24) {
    // Evening
    document.body.style.backgroundImage = `url(assets/images/evening/${randomBg}.jpg)`;
    setBackground('evening', 20);
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = 'white';
    document.body.style.textShadow = '0 0 6px #000000';
  } else if (hour < 6 && hour >= 0) {
    // Night
    document.body.style.backgroundImage = `url(assets/images/night/${randomBg}.jpg)`;
    setBackground('night', 20);
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = 'white';
    document.body.style.textShadow = '0 0 6px #000000';
  }
}

function viewImage(data) {
  const body = document.querySelector('body');
  const img = document.createElement('img');
  img.src = data;
  img.onload = () => {
    body.style.backgroundImage = `url(${data})`;
  };
}
function setBackground(day, numberImage) {
  let url;
  controlBg.addEventListener('click', () => {
    --numberImage;
    if (numberImage < 10) {
      numberImage = `0${numberImage}`;
    }
    url = `assets/images/${day}/${numberImage}.jpg`;
    viewImage(url);
    controlBg.disabled = true;
    setTimeout(() => { controlBg.disabled = false; }, 1500);
  });
  if (numberImage < 1) {
    setBackground(day, 20);
  } else {
    if (numberImage < 10) {
      numberImage = `0${numberImage}`;
    }
    url = `assets/images/${day}/${numberImage}.jpg`;
    setTimeout(() => {
      viewImage(url);
      setBackground(day, numberImage - 1);
    }, 10000);
  }
}
