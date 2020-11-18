export default function showDayOfWeek() {
  const date = document.querySelector('.date');
  const daysOfWeek = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  };
  const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'Jule',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  };
  const today = new Date();
  const month = today.getMonth();
  const day = today.getDay();
  const number = today.getDate();
  date.innerHTML = `${daysOfWeek[day]}<br> ${number} ${months[month]}`;
}
