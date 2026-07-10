const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

// Upcoming Ramadan start dates (astronomical predictions; the actual start
// depends on the local moon sighting). The countdown targets the next one.
const ramadanStarts = ["18 Feb 2026", "8 Feb 2027", "28 Jan 2028", "16 Jan 2029", "5 Jan 2030"];
const newYears = ramadanStarts.find((d) => new Date(d) > new Date()) || ramadanStarts[ramadanStarts.length - 1];

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = Math.max(0, (newYearsDate - currentDate) / 1000); // never negative once the date passes

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  console.log(days, hours, mins, seconds);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
//initial call
countdown();

setInterval(countdown, 1000);
