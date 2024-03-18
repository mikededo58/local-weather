//Decalring Elements for DOM
const searchInputEl = document.querySelector("#cityInput");
const searchButtonEl = document.querySelector("#searchButton");
const searchHistoryEl = document.querySelector("#searchHistory");
const todayEl = document.querySelector("#today");
const dayOne = document.querySelector("#forecastDayOne");
const dayTwo = document.querySelector("#forecastDayTwo");
const dayThree = document.querySelector("#forecastDayThree");
const dayFour = document.querySelector("#forecastDayFour");
const dayFive = document.querySelector("#forecastDayFive");
const locations = [];

//Creating function for the localstorage
if (localStorage.getItem("locations") === typeof Array) {
  const localArr = JSON.parse(localStorage.getItem("locations"));
  locations.push(...localArr);
}

//Function to handle the history search and calling the weatherForecasr function
function handleHistorySearch(event) {
  console.log(event.target.id);
  weatherForecast(event.target.id);
}

//function to convert temp to F
function tempConversion(tempKelvin) {
  const convertedTemp = Math.round(
    ((Number(tempKelvin) - 273.15) * 9) / 5 + 32
  );
  return convertedTemp;
}

//Function to convert windspeed to mph
function windSpeedConversion(speedMps) {
  const convertedSpeed = Math.round(Number(speedMps) * 223.7) / 100;
  return convertedSpeed;
}

//Function to format date correctly
function dateFormatted(date) {
  const dateFormat = `${date.slice(5, 7)}/${date.slice(8, 10)}/${date.slice(
    0,
    4
  )}`;
  return dateFormat;
}
//function to store search history info
function storeSearchHistory(location) {
  // const lslocations = [];
  if (JSON.parse(localStorage.getItem("locations")) === typeof Array) {
    const localArr = JSON.parse(localStorage.getItem("locations"));
    // lscities.push(location);
    // create loop to search array for if city exist, if it does not execute below code and
    locations.push(...localArr); // pushing object to local storage
    console.log(locations);
  } else {
    // lscities.push(location);
    locations.push(location);
    console.log(locations);
  }
  localStorage.setItem("locations", JSON.stringify(locations));
}

function displayStoredCities() {
  // function to display recently searched cities in the UI
  searchHistoryEl.textContent = "";
  for (i = 0; i < locations.length; i++) {
    console.log(locations);
    const historyEl = document.createElement("button");
    historyEl.textContent = locations[i];
    historyEl.setAttribute("class", "btn btn-outline-info location");
    historyEl.setAttribute("id", `${locations[i]}`);
    searchHistoryEl.appendChild(historyEl);
    historyEl.addEventListener("click", handleHistorySearch);
  }
}

//Function to call api and appened info to UI
function weatherForecast(locationSearch) {
  const searchUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${locationSearch}&appid=b0aa53ed3123b7e0caa8552579902513`; //API we are calling

  fetch(searchUrl) // Calling the API
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data); // Defining elements for DOM manipulation
      const todayIcon = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
      const todayDate = dateFormatted(data.list[0].dt_txt);
      const todayCityDateEl = document.createElement("h2");
      const todayImgEl = document.createElement("img");
      const todayTempEl = document.createElement("p");
      const todayWindEl = document.createElement("p");
      const todayHumidityEl = document.createElement("p");
      const dayOneIcon = `https://openweathermap.org/img/wn/${data.list[7].weather[0].icon}@2x.png`;
      const dayOneDate = dateFormatted(data.list[7].dt_txt);
      const dayOneDateEl = document.createElement("h3");
      const dayOneImgEl = document.createElement("img");
      const dayOneTempEl = document.createElement("p");
      const dayOneWindEl = document.createElement("p");
      const dayOneHumidityEl = document.createElement("p");

      const dayTwoIcon = `https://openweathermap.org/img/wn/${data.list[15].weather[0].icon}@2x.png`;
      const dayTwoDate = dateFormatted(data.list[15].dt_txt);
      const dayTwoDateEl = document.createElement("h3");
      const dayTwoImgEl = document.createElement("img");
      const dayTwoTempEl = document.createElement("p");
      const dayTwoWindEl = document.createElement("p");
      const dayTwoHumidityEl = document.createElement("p");

      const dayThreeIcon = `https://openweathermap.org/img/wn/${data.list[23].weather[0].icon}@2x.png`;
      const dayThreeDate = dateFormatted(data.list[23].dt_txt);
      const dayThreeDateEl = document.createElement("h3");
      const dayThreeImgEl = document.createElement("img");
      const dayThreeTempEl = document.createElement("p");
      const dayThreeWindEl = document.createElement("p");
      const dayThreeHumidityEl = document.createElement("p");

      const dayFourIcon = `https://openweathermap.org/img/wn/${data.list[31].weather[0].icon}@2x.png`;
      const dayFourDate = dateFormatted(data.list[31].dt_txt);
      const dayFourDateEl = document.createElement("h3");
      const dayFourImgEl = document.createElement("img");
      const dayFourTempEl = document.createElement("p");
      const dayFourWindEl = document.createElement("p");
      const dayFourHumidityEl = document.createElement("p");

      const dayFiveIcon = `https://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png`;
      const dayFiveDate = dateFormatted(data.list[39].dt_txt);
      const dayFiveDateEl = document.createElement("h3");
      const dayFiveImgEl = document.createElement("img");
      const dayFiveTempEl = document.createElement("p");
      const dayFiveWindEl = document.createElement("p");
      const dayFiveHumidityEl = document.createElement("p");

      todayCityDateEl.textContent = `${data.city.name} ${todayDate}`; // assinging datat to the elements assigned above
      todayImgEl.setAttribute("src", todayIcon);
      todayTempEl.textContent = `Temp: ${tempConversion(
        data.list[0].main.temp
      )}°F`;
      todayWindEl.textContent = `Wind: ${windSpeedConversion(
        data.list[0].wind.speed
      )} MPH`;
      todayHumidityEl.textContent = `Humidity: ${data.list[0].main.humidity}%`;

      dayOneDateEl.textContent = dayOneDate;
      dayOneImgEl.setAttribute("src", dayOneIcon);
      dayOneTempEl.textContent = `Temp: ${tempConversion(
        data.list[7].main.temp
      )}°F`;
      dayOneWindEl.textContent = `Wind: ${windSpeedConversion(
        data.list[7].wind.speed
      )} MPH`;
      dayOneHumidityEl.textContent = `Humidity: ${data.list[7].main.humidity}%`;

      dayTwoDateEl.textContent = dayTwoDate;
      dayTwoImgEl.setAttribute("src", dayTwoIcon);
      dayTwoTempEl.textContent = `Temp: ${tempConversion(
        data.list[15].main.temp
      )}°F`;
      dayTwoWindEl.textContent = `Wind: ${windSpeedConversion(
        data.list[15].wind.speed
      )} MPH`;
      dayTwoHumidityEl.textContent = `Humidity: ${data.list[15].main.humidity}%`;

      dayThreeDateEl.textContent = dayThreeDate;
      dayThreeImgEl.setAttribute("src", dayThreeIcon);
      dayThreeTempEl.textContent = `Temp: ${tempConversion(
        data.list[23].main.temp
      )}°F`;
      dayThreeWindEl.textContent = `Wind: ${windSpeedConversion(
        data.list[23].wind.speed
      )} MPH`;
      dayThreeHumidityEl.textContent = `Humidity: ${data.list[23].main.humidity}%`;

      dayFourDateEl.textContent = dayFourDate;
      dayFourImgEl.setAttribute("src", dayFourIcon);
      dayFourTempEl.textContent = `Temp: ${tempConversion(
        data.list[31].main.temp
      )}°F`;
      dayFourWindEl.textContent = `Wind: ${windSpeedConversion(
        data.list[31].wind.speed
      )} MPH`;
      dayFourHumidityEl.textContent = `Humidity: ${data.list[31].main.humidity}%`;

      dayFiveDateEl.textContent = dayFiveDate;
      dayFiveImgEl.setAttribute("src", dayFiveIcon);
      dayFiveTempEl.textContent = `Temp: ${tempConversion(
        data.list[39].main.temp
      )}°F`;
      dayFiveWindEl.textContent = `Wind: ${windSpeedConversion(
        data.list[39].wind.speed
      )} MPH`;
      dayFiveHumidityEl.textContent = `Humidity: ${data.list[39].main.humidity}%`;

      todayEl.textContent = ""; // Appending information to DOM elements
      todayEl.appendChild(todayCityDateEl);
      todayEl.appendChild(todayImgEl);
      todayEl.appendChild(todayTempEl);
      todayEl.appendChild(todayWindEl);
      todayEl.appendChild(todayHumidityEl);

      dayOne.textContent = "";
      dayOne.appendChild(dayOneDateEl);
      dayOne.appendChild(dayOneImgEl);
      dayOne.appendChild(dayOneTempEl);
      dayOne.appendChild(dayOneWindEl);
      dayOne.appendChild(dayOneHumidityEl);

      dayTwo.textContent = "";
      dayTwo.appendChild(dayTwoDateEl);
      dayTwo.appendChild(dayTwoImgEl);
      dayTwo.appendChild(dayTwoTempEl);
      dayTwo.appendChild(dayTwoWindEl);
      dayTwo.appendChild(dayTwoHumidityEl);

      dayThree.textContent = "";
      dayThree.appendChild(dayThreeDateEl);
      dayThree.appendChild(dayThreeImgEl);
      dayThree.appendChild(dayThreeTempEl);
      dayThree.appendChild(dayThreeWindEl);
      dayThree.appendChild(dayThreeHumidityEl);

      dayFour.textContent = "";
      dayFour.appendChild(dayFourDateEl);
      dayFour.appendChild(dayFourImgEl);
      dayFour.appendChild(dayFourTempEl);
      dayFour.appendChild(dayFourWindEl);
      dayFour.appendChild(dayFourHumidityEl);

      dayFive.textContent = "";
      dayFive.appendChild(dayFiveDateEl);
      dayFive.appendChild(dayFiveImgEl);
      dayFive.appendChild(dayFiveTempEl);
      dayFive.appendChild(dayFiveWindEl);
      dayFive.appendChild(dayFiveHumidityEl);
    });
  storeSearchHistory(locationSearch);
  displayStoredCities();
}

function handleSearch(event) {
  // function to kick of the search
  event.preventDefault();
  weatherForecast(searchInputEl.value);
}
searchButtonEl.addEventListener("click", handleSearch);

//create one function iterate through the object and then append the data to the DOM. skip ahead 8 on the for loop

// Create a function to append recently searched cities

// create JSON to save searches to local storages
