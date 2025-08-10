var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document
  .querySelector("img")
  .setAttribute("src", "imgs/dice" + randomNumber1 + ".png");

document
  .querySelectorAll("img")[1]
  .setAttribute("src", "imgs/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "player 1 wins 🚩";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "player 2 wins 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw !!";
}
