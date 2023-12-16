let timeDisplay = document.querySelector(".timeDisplay");
let Startbtn = document.getElementById("Startbtn");
let Stopbtn = document.getElementById("Stopbtn");
let Resartbtn = document.getElementById("Restartbtn");

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;

Startbtn.addEventListener("click", function () {
  // Check if the timer is already running
  if (timerId === null) {
    // Start the timer and store the timerId
    timerId = setTimeout(startTimer, 10);
  }
});

Stopbtn.addEventListener("click", function () {
  // Clear the timeout to stop the timer
  clearTimeout(timerId);
  timerId = null; // Reset the timer ID
});

Resartbtn.addEventListener("click", function () {
  // Clear the timeout and reset the timer values
  clearTimeout(timerId);
  timerId = null; // Reset the timer ID
  timeDisplay.innerHTML = `00 : 00 : 00 `;
  msec = secs = mins = 0;
});

function startTimer() {
  msec++;
  if (msec == 100) {
    msec = 0;
    secs++;
    if (secs == 60) {
      secs = 0;
      mins++;
    }
  }

  let msecString = msec < 10 ? `0${msec}` : msec;
  let secsString = secs < 10 ? `0${secs}` : secs;
  let minsString = mins < 10 ? `0${mins}` : mins;

  timeDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;

  // Call startTimer again after 10 milliseconds
  timerId = setTimeout(startTimer, 10);
}
