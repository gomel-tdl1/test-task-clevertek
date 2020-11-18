/**
 * @param {boolean} showAmPm
 */

export default function showTime(showAmPm) {
  const time = document.querySelector('.time');
  const today = new Date();
  let hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr Format
  if (showAmPm) hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec,
  )} ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}
