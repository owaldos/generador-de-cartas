/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  valueRandom();
};

let valuesArray = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
let typesArray = ["♥️", "♦️", "♣️", "♠️"];
let button = document.querySelector("button");
button.addEventListener("click", valueRandom);

function valueRandom() {
  let date = [
    Math.floor(Math.random() * typesArray.length),
    Math.floor(Math.random() * valuesArray.length)
  ];
  cardStyle(date);
}

function cardStyle(date) {
  let cardValue = document.querySelector("h1");
  let cardType = document.querySelectorAll(".title-card");
  cardValue.innerHTML = valuesArray[date[1]];
  cardType[0].innerHTML = typesArray[date[0]];
  cardType[1].innerHTML = typesArray[date[0]];
  if (date[0] == 0 || date[0] == 1) {
    cardType[0].style.color = "red";
    cardType[1].style.color = "red";
    cardValue.style.color = "red";
  } else {
    cardType[0].style.color = "black";
    cardType[1].style.color = "black";
    cardValue.style.color = "black";
  }
}
