//dice 1
let rollButton = document.getElementById("rollButton");

rollButton.addEventListener("click", function () {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  let randomImgSrc = "img/dice" + randomNumber1 + ".png";
  let image1 = document
    .querySelectorAll("img")[0]
    .setAttribute("src", randomImgSrc); //capturar img
  let randomImgSrc2 = "img/dice" + randomNumber2 + ".png";
  let image2 = document
    .querySelectorAll("img")[1]
    .setAttribute("src", randomImgSrc2);
  let title = document.querySelector("h1");

  //condicional resultado do jogo

  if (randomNumber1 > randomNumber2) {
    title.innerHTML = "🏆Player 1 won!";
  } else if (randomNumber2 > randomNumber1) {
    title.innerHTML = "🏆Player 2 won!";
  } else {
    title.innerHTML = "Draw! Try again!";
  }
});
