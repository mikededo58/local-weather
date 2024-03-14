const searchInputEl = document.getElementById("cityInput");
const searchButton = document.getElementById("citySearch");
const currentWeatherContainer = document.getElementById(
  "currentWeatherContainer"
);

function handleSearch(event) {
  event.preventDefault();

  // https://api.openweathermap.org/data/2.5/forecast?q={Denver}&appid=b0aa53ed3123b7e0caa8552579902513

  const searchUrl = `https://api.openweathermap.org/data/2.5/forecast?q=$&appid=${searchInputEl.val()}&appid=b0aa53ed3123b7e0caa8552579902513`; //API Key

  fetch(searchUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i = 0; i < data.list.length; i++) {
        const currentNameEl = document.createElement("h3");
        const currentDateEl = document.createElement("h3");
        const currentIconEl = document.createElement("p");
        const currentTempEl = document.createElement("p");
        const currentWindEl = document.createElement("p");
        const currentHumidityEl = document.createElement("p");
        currentNameEl.textcontent = data[i].list.city.name;
        currentDateEl.textcontent = data[i].list.dt_text;
        currentIconEl.textContent = data[i].list.weather.icon;
        currentTempEl.textContent = data[i].list.main.temp;
        currentWindEl.textContent = data[i].list.wind.speed;
        currentHumidityEl.textContent = data[i].list.main.humidity;
        currentWeatherContainer.append(currentNameEl);
        currentWeatherContainer.append(currentDateEl);
        currentWeatherContainer.append(currentIconEl);
        currentWeatherContainer.append(currentTempEl);
        currentWeatherContainer.append(currentWindEl);
        currentWeatherContainer.append(currentHumidityEl);
      }
    });
}

searchButton.addEventListener("click", handleSearch);

// `https://api.openweathermap.org/data/2.5/forecast?q=London&appid={b0aa53ed3123b7e0caa8552579902513}

//create one function iterate through the object and then append the data to the DOM. skip ahead 8 on the for loop

// Create a function to append recently searched cities

// create JSON to save searches to local storages
