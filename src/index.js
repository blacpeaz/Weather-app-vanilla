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

<<<<<<< HEAD
function formatDay(daysOfWeek) {
  let date = new Date(daysOfWeek * 1000);
  let day = date.getDay();

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
=======
function formatDay (daysOfWeek) {
  let date = new Date(daysOfWeek * 1000);
  let day = date.getDay();
  
  console.log(day)
  let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
>>>>>>> 95d6d25353b4e2826df4daaa4fcc94d811e372f4
  return days[day];
}

function showWeatherForecast(response) {
<<<<<<< HEAD
  let forecast = response.data.daily;
=======
  console.log(response.data.daily);
  forecast = response.data.daily;
>>>>>>> 95d6d25353b4e2826df4daaa4fcc94d811e372f4
  let weatherForecast = document.querySelector("#weather-forecast");

  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (futureForecast, index) {
    if (index < 6) {
<<<<<<< HEAD
      forecastHTML =
        forecastHTML +
        ` <div class="col-2">
        <div class="weather-forecast-date">${formatDay(
          futureForecast.time
        )}</div>
          <img 
          src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${
            response.data.daily[0].condition.icon
          }.png" alt="" width="42" />
            <div class="weather-forecast-temp">
              <span class="weather-forecast-temp-max"> ${Math.round(
                futureForecast.temperature.maximum
              )}° </span>
                <span class="weather-forecast-temp-min"> ${Math.round(
                  futureForecast.temperature.minimum
                )}° </span>
            </div>
        </div>`;
    }
=======
    forecastHTML =
      forecastHTML +
      ` <div class="col-2">
        <div class="weather-forecast-date">${formatDay(futureForecast.dt)}</div>
          <img src="https://openweathermap.org/img/wn/${futureForecast.weather[0].icon}@2x.png" alt="" width="42" />
            <div class="weather-forecast-temp">
              <span class="weather-forecast-temp-max"> ${Math.round(futureForecast.temp.max)}° </span>
                <span class="weather-forecast-temp-min"> ${Math.round(futureForecast.temp.min)}° </span>
            </div>
        </div>`;
      }
>>>>>>> 95d6d25353b4e2826df4daaa4fcc94d811e372f4
  });

  forecastHTML = forecastHTML + `</div>`;
  weatherForecast.innerHTML = forecastHTML;
}

function getCoordinates(coordinates) {
<<<<<<< HEAD
  apiKey = "ba7af5e1a0f20of6a802717t492a3b19";
  let lat = coordinates.latitude;
  let lon = coordinates.longitude;
=======
  let apiKey = "de2c40e370d58e257faf07ba4ea95840";
  let lat = coordinates.lat;
  let lon = coordinates.lon;
>>>>>>> 95d6d25353b4e2826df4daaa4fcc94d811e372f4

  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeatherForecast);
}

//Temp Display & its properties
function showTemperature(response) {
  let tempNum = document.querySelector("#temp-num");
  let heading = document.querySelector("h1");
  let precipitation = document.querySelector("#precipitation");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let icon = document.querySelector("#icon");
  let description = document.querySelector("#description");
  celsiusTemp = response.data.temperature.current;

<<<<<<< HEAD
  tempNum.innerHTML = Math.round(response.data.temperature.current);
  heading.innerHTML = response.data.city;
  humidity.innerHTML = `Humidity: ${response.data.temperature.humidity}%`;
=======
  tempNum.innerHTML = Math.round(response.data.main.temp);
  heading.innerHTML = response.data.name;
  humidity.innerHTML = `Humidity: ${response.data.main.humidity} %`;
>>>>>>> 95d6d25353b4e2826df4daaa4fcc94d811e372f4
  wind.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} km/h`;
  precipitation.innerHTML = `Precipitation: ${Math.round(response.data.rain)}`;
  description.innerHTML = response.data.condition.description;
  icon.setAttribute(
    "src",
    ` http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );
  icon.setAttribute("alt", response.data.condition.description);

  getCoordinates(response.data.coordinates);
}

// Getting the input value
function displayCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  searchCity(searchInput.value);
}

// for calling API
function searchCity(city) {
  apiKey = "ba7af5e1a0f20of6a802717t492a3b19";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

//current temp
function retrievePosition(position) {
  let apiKey = "ba7af5e1a0f20of6a802717t492a3b19";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lat=${lat}&lon=${lon}&key=${apiKey}&units=metric`;
  let heading = document.querySelector("h1");
  heading.innerHTML = "Antananarivo";

  axios.get(apiUrl).then(showTemperature);
}

function showCurrentTemp() {
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

// units
//Celsius
function celsius(event) {
  event.preventDefault();
  degreeCelsius.classList.add("active");
  degreeFahrenheit.classList.remove("active");
  let tempNum = document.querySelector("#temp-num");
  tempNum.innerHTML = Math.round(celsiusTemp);
}

// Fahrenheit
function fahrenheit(event) {
  event.preventDefault();
  degreeCelsius.classList.remove("active");
  degreeFahrenheit.classList.add("active");
  let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
  let tempNum = document.querySelector("#temp-num");
  tempNum.innerHTML = Math.round(fahrenheitTemp);
}

let currentBtn = document.querySelector("#current-btn");
currentBtn.addEventListener("click", showCurrentTemp);

let celsiusTemp = null;

let inputForm = document.querySelector("#input-form");
inputForm.addEventListener("submit", displayCity);

let degreeCelsius = document.querySelector("#degree-celsius");
degreeCelsius.addEventListener("click", celsius);

let degreeFahrenheit = document.querySelector("#degree-fahrenheit");
degreeFahrenheit.addEventListener("click", fahrenheit);

let apiKey = "ba7af5e1a0f20of6a802717t492a3b19";

searchCity("Antananarivo");
