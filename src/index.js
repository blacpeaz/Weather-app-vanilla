// Day and Time
let currentTime = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let today = days[currentTime.getDay()];
let day = document.querySelector("#day");
let hour = currentTime.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
day.innerHTML = `${today} ${hour}:${minutes}`;

//Temp display
function showTemperature(response) {
  let temperature = response.data.main.temp;
  let tempNum = document.querySelector("#temp-num");
  tempNum.innerHTML = Math.round(temperature);
}

// for display search input
function displayCity(event) {
  event.preventDefault();
  let heading = document.querySelector("h1");
  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value;
  city = city.trim().toLowerCase();

  heading.innerHTML = city;

  let apiKey = "ce144f0cf51fa43f03431f0488a36728";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

//current temp
function retrievePosition(position) {
  let apiKey = "ce144f0cf51fa43f03431f0488a36728";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  let heading = document.querySelector("h1");
  heading.innerHTML = "Antananarivo";

  axios.get(apiUrl).then(showTemperature);
}

function showCurrentTemp() {
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

let currentBtn = document.querySelector("#current-btn");
currentBtn.addEventListener("click", showCurrentTemp);

// unit

//Celsius
function celsius(event) {
  event.preventDefault();
  degreeCelsius.classList.add("active");
  degreeFahrenheit.classList.remove("active");
  displayCity(event);
  showTemperature(response);
}

// Fahrenheit
function showFahrenheit(imperial) {
  let fahrenheitTemp = imperial.data.main.temp;
  let tempNum = document.querySelector("#temp-num");
  tempNum.innerHTML = Math.round(fahrenheitTemp);
}

function fahrenheit(event) {
  event.preventDefault();
  degreeCelsius.classList.remove("active");
  degreeFahrenheit.classList.add("active");
  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value;
  let apiKey = "ce144f0cf51fa43f03431f0488a36728";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showFahrenheit);
}

let inputForm = document.querySelector("#input-form");
inputForm.addEventListener("submit", displayCity);

let degreeCelsius = document.querySelector("#degree-celsius");
degreeCelsius.addEventListener("click", celsius);

let degreeFahrenheit = document.querySelector("#degree-fahrenheit");
degreeFahrenheit.addEventListener("click", fahrenheit);
