let is24Hour = false; // Default 12-hour format

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let session = "AM";

  // Greeting + background
  const greetingEl = document.getElementById("greeting");
  if (hours >= 5 && hours < 12) {
    document.body.style.background = "linear-gradient(135deg, #FFD700, #FF8C00)";
    greetingEl.innerText = "Good Morning 🌞";
  } else if (hours >= 12 && hours < 17) {
    document.body.style.background = "linear-gradient(135deg, #87CEEB, #4682B4)";
    greetingEl.innerText = "Good Afternoon ☀️";
  } else if (hours >= 17 && hours < 20) {
    document.body.style.background = "linear-gradient(135deg, #FF4500, #8B0000)";
    greetingEl.innerText = "Good Evening 🌆";
  } else {
    document.body.style.background = "linear-gradient(135deg, #191970, #000000)";
    greetingEl.innerText = "Good Night 🌙";
  }

  // Time format
  if (!is24Hour) {
    session = "AM";
    if (hours == 0) {
      hours = 12;
    } else if (hours > 12) {
      hours -= 12;
      session = "PM";
    }
  }

  // Add leading zero
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const time = is24Hour ? `${hours}:${minutes}:${seconds}` : `${hours}:${minutes}:${seconds} ${session}`;
  document.getElementById("clock").innerText = time;

  // Date
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayName = days[now.getDay()];
  const monthName = months[now.getMonth()];
  const date = `${dayName}, ${now.getDate()} ${monthName} ${now.getFullYear()}`;
  document.getElementById("date").innerText = date;
}

// Toggle format button
document.getElementById("toggleFormat").addEventListener("click", () => {
  is24Hour = !is24Hour;
  document.getElementById("toggleFormat").innerText = is24Hour
    ? "Switch to 12-Hour"
    : "Switch to 24-Hour";
  updateClock();
});

// Run clock
updateClock();
setInterval(updateClock, 1000);



