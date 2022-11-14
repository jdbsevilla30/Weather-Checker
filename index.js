let htmlString = ``;

document.getElementById("submit-form").addEventListener("submit", function (e) {
  e.preventDefault();

  let cityName = document.getElementById("city-text").value;

  console.log(cityName);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=6ab268848b2e12efd27bb864721f5cdb`
  )
    .then((response) => response.json())
    .then((data) => {
      const { main, weather, name, coord } = data;

      htmlString = `
      <h1>
      City Name:
      <p class="city-name inline">${name}</p>
    </h1>
    <h1>
      Temperature:
      <p class="temperature inline">${main.feels_like} °C</p>
    </h1>
    <h1>
      Realtime Weather:
      <p class="weather inline">${weather[0].description}</p>
    </h1>
    <h1>
      Humidity Level:
      <p class="humidity inline">${main.humidity}%</p>
    </h1>

    
      `;
      console.log(htmlString);
      render();
    });
});

const render = () =>
  (document.getElementById("weather-result").innerHTML = htmlString);

