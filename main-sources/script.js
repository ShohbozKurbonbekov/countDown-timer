"use strict";
// selecting the Elements
const days = document.getElementById("daysNum");
const hours = document.getElementById("hoursNum");
const minutes = document.getElementById("minutesNum");
const seconds = document.getElementById("secondsNum");

//FormatTime Function
const formatTimeFunc = function (time) {
  return time < 10 ? `0${time}` : time;
};

// countingFunction
const countDownFunc = function () {
  // figuring out the time
  const newYearInMillSecs = new Date(2024, 11, 31).getTime();
  const nowInMillSecs = new Date().getTime();
  const leftPeriodInSecs = (newYearInMillSecs - nowInMillSecs) / 1000;

  // days
  const calDays = Math.floor(leftPeriodInSecs / (60 * 60 * 24));
  days.innerText = formatTimeFunc(calDays);

  // hours
  const calHours = Math.floor(leftPeriodInSecs / (60 * 60)) % 24;
  hours.innerText = formatTimeFunc(calHours);

  // minutes
  const calMinutes = Math.floor(leftPeriodInSecs / 60) % 60;
  minutes.innerText = formatTimeFunc(calMinutes);

  // seconds
  const calSeconds = Math.floor(leftPeriodInSecs) % 60;
  seconds.innerText = formatTimeFunc(calSeconds);
};

// countDownFunc();
setInterval(countDownFunc, 1000);
