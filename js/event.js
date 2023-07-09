console.log("This is a separate JS file");

// option 1: directly set on the HTML element
// <button onclick="document.body.style.backgroundColor='green'">Green</button>

// option 2 [important-we will use this]
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}

// option 3
const makeRedButton = document.getElementById("make-red");
makeRedButton.onclick = makeRed;

function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option 3 another [we will use this sometimes]
const pinkButton = document.getElementById("make-pink");
pinkButton.onclick = function makePink() {
  document.body.style.backgroundColor = "pink";
};

// option 4
const makePurple = document.getElementById("make-purple");
makePurple.addEventListener("click", makePurpleButton);
function makePurpleButton() {
  document.body.style.backgroundColor = "purple";
}

// option 4 Final
// IMPORTANT: we will use this sometimes.
const blueButton = document.getElementById("make-blue");
blueButton.addEventListener("click", function blueButtonClick() {
  document.body.style.backgroundColor = "blue";
});
