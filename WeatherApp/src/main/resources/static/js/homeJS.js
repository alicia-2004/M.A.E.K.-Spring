let nameUser = "";
let passwordUser = "";
let locationUser = "";

window.onload = function () {
  const id = new URLSearchParams(window.location.search).get("id");

  fetch("/api/getConsumerById/" + id)
    .then((response) => response.json())
    .then((data) => {
      nameUser = data.name;
      passwordUser = data.password;
      locationUser = data.location;

      fetch(
        "http://api.weatherapi.com/v1/forecast.json?key=da0777efff6049af9a1105722250304&q=" +
          data.location +
          "&days=3&aqi=no"
      )
        .then((response) => response.json())
        .then((data) => {
          displayWeatherData(data);
          console.log("Recieved Data: ", data);
          console.log(
            "Recieved Data: ", data
          );
        })
        .catch((error) => console.error("Error fetching data, " + error));
    })
    .catch((error) => console.error("Error fetching data, " + error));
};

function displayWeatherData(item) {
  const cityNameDiv=document.getElementById("cityName");
  const cityTempDiv=document.getElementById("cityTemp");
  const feelsLikeTemp=document.getElementById("feelsLikeTemp");
  const chanceOfRain=document.getElementById("chanceOfRain");
  const windSpeed=document.getElementById("windSpeed");
  const humidity=document.getElementById("humidity");

  const cityImage=document.getElementById("cityImage");

  cityNameDiv.innerHTML = item.location.name;
  cityTempDiv.innerHTML = item.current.temp_c+"ºC";
  feelsLikeTemp.innerHTML = item.current.feelslike_c+"ºC";
  chanceOfRain.innerHTML = item.forecast.forecastday[0].day.daily_chance_of_rain+"%";
  windSpeed.innerHTML = item.current.wind_kph+" KM/H";
  humidity.innerHTML = item.current.humidity+"%";

  cityImage.src = item.current.condition.icon;

  const rightColumn = document.getElementById("rightColumn");
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  item.forecast.forecastday.forEach((forecast, index) => {
    const forecastDiv = document.createElement("div");
    forecastDiv.className = "forecastDay"+index;

    const dayDiv = document.createElement("div");
    dayDiv.className = "forecastDayName";
    if(index == 0){
      dayDiv.textContent="Today";
    }else{
      dayDiv.textContent=daysOfWeek[new Date(forecast.date).getDay()]
    }
    forecastDiv.appendChild(dayDiv);

    const dateDiv = document.createElement("div");
    dateDiv.className = "forecastDate";
    const date = new Date(forecast.date);
    dateDiv.textContent = date.getDate()+"/"+(date.getMonth()+1);
    forecastDiv.appendChild(dateDiv);

    const iconDiv = document.createElement("div");
    iconDiv.className = "forecastIcon";
    const iconImg = document.createElement("img");
    iconImg.src = forecast.day.condition.icon;
    iconImg.alt = forecast.day.condition.text;
    iconDiv.appendChild(iconImg);
    forecastDiv.appendChild(iconDiv);

    const conditionDiv = document.createElement("div");
    conditionDiv.className = "forecastCondition";
    conditionDiv.textContent = forecast.day.condition.text;
    forecastDiv.appendChild(conditionDiv);

    rightColumn.appendChild(forecastDiv);
  });
}