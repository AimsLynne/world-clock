function updateTime() {
  //london
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Johannesburg
  let johannesburgElement = document.querySelector("#johannesburg");
  let johannesburgDateElement = johannesburgElement.querySelector(".date");
  let johannesburgTimeElement = johannesburgElement.querySelector(".time");
  let johannesburgTime = moment().tz("Africa/Johannesburg");

  johannesburgDateElement.innerHTML = johannesburgTime.format("MMMM Do YYYY");
  johannesburgTimeElement.innerHTML = johannesburgTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
