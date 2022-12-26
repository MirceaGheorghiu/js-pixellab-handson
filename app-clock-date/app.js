const timeElement = document.querySelector('.time');
const dateElement = document.querySelector('.date');
const dayElement = document.querySelector('.day');

function setTime() {
  const currentTime = new Date();

  // am pus initial gresit const si am avut impresia ca merge, dar evident trebuia let :)
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  timeElement.innerHTML = `${hours} : ${minutes} <span class="seconds">${seconds}</span>`;
}

function setDate() {
  const currentTime = new Date();

  const day = currentTime.getDay();
  const date = currentTime.getDate();
  const month = currentTime.getMonth();
  const year = currentTime.getFullYear();

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const monthsOfYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  dayElement.innerText = `${daysOfWeek[day]}`;

  dateElement.innerText = `${date} / ${monthsOfYear[month]} / ${year}`;
}

setInterval(setTime, 1000);
setInterval(setDate, 1000);
