function updateTime() {
  // NYC
  let nycElement = document.querySelector("#nyc");
  if (nycElement) {
    let nycDateElement = nycElement.querySelector(".date");
    let nycTimeElement = nycElement.querySelector(".time");
    let nycTime = moment().tz("America/New_York");

    nycDateElement.innerHTML = nycTime.format("MMMM Do, YYYY");
    nycTimeElement.innerHTML = nycTime.format("h:mm:ss [<small>]A[</small]");
  }
  // denver
  let denverElement = document.querySelector("#denver");
  if (nycElement) {
    let denverDateElement = denverElement.querySelector(".date");
    let denverTimeElement = denverElement.querySelector(".time");
    let denverTime = moment().tz("America/Denver");

    denverDateElement.innerHTML = denverTime.format("MMMM Do, YYYY");
    denverTimeElement.innerHTML = denverTime.format(
      "h:mm:ss [<small>]A[</small]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
                <div>
                    <h2>${cityName}</h2>
                    <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
                </div>
               <div class="time">${cityTime.format("h:mm:ss")}
                    <small>${cityTime.format("A")}</small></div>
                </div>
             `;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
