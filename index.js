setInterval(function () {
  // NYC
  let nycElement = document.querySelector("#nyc");
  let nycDateElement = nycElement.querySelector(".date");
  let nycTimeElement = nycElement.querySelector(".time");
  let nycTime = moment().tz("America/New_York");

  nycDateElement.innerHTML = nycTime.format("MMMM Do, YYYY");
  nycTimeElement.innerHTML = nycTime.format("h:mm:ss [<small>]A[</small]");

  // san juan
  let denverElement = document.querySelector("#denver");
  let denverDateElement = denverElement.querySelector(".date");
  let denverTimeElement = denverElement.querySelector(".time");
  let denverTime = moment().tz("America/Denver");

  denverDateElement.innerHTML = denverTime.format("MMMM Do, YYYY");
  denverTimeElement.innerHTML = denverTime.format(
    "h:mm:ss [<small>]A[</small]"
  );
}, 1000);
