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
      displayUserData(data);

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

function displayUserData(data) {
  const title=document.getElementById("title");
  title.innerHTML = "Welcome " + data.name + "!";
}

function displayWeatherData(item) {
  const list = document.getElementById("list");
  const subtitle = document.getElementById("subtitle");
  list.innerHTML = "";
  subtitle.innerHTML = "Weather in " + item.location.name + ", " + item.location.country;

  item.forecast.forecastday.forEach((day) =>{
    let li = document.createElement("li");
    li.textContent = `Date: ${day.date}`;
    list.appendChild(li);

    let ul = document.createElement("ul");

    li=document.createElement("li");
    li.textContent = `Average Temperature (Celcius): ${day.day.avgtemp_c}°C`;
    ul.appendChild(li);

    li=document.createElement("li");
    li.textContent = `Average Temperature (Farrenheit): ${day.day.avgtemp_f}°F`;
    ul.appendChild(li);

    list.appendChild(ul);
  })
}
function displayFutureDayData(item) {
  const table = document.getElementById("table");
  const diaSemana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]

  item.forecast.forecastday.forEach((day) =>{
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    let td = document.createElement("td");
    th.textContent = diaSemana[day.date.getDay()];
    tr.appendChild(th);

    td.textContent = day.day.condition.icon;
    tr.appendChild(td);
    table.appendChild(tr);
    
  })
}
