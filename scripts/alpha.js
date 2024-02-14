// function play() {
//   const homeScreen = document.getElementById("home-screen");
//   const playGround = document.getElementById("play-ground");
//   // hide home section
//   homeScreen.classList.add("hidden");
//   //   display play-ground
//   playGround.classList.remove("hidden");
// }

// handle keyboard press
function keyboardHandler(e) {
  // pressed key
  const playerPressed = e.key;

  // stop the game if pressed the escape-key
  if (playerPressed === "Escape") {
    gameOver();
  }

  // expected to press
  const currentAlphabet = document
    .getElementById("current-alphabet")
    .innerText.toLowerCase();

  if (playerPressed === currentAlphabet) {
    // update score
    const currentScore = getInnerTextById("current-score");
    const updatedScore = currentScore + 1;
    setInnerTextById("current-score", updatedScore);
    // play another round
    continueGame();
    // clear the background of pressed key
    removeBackgroundColor(currentAlphabet);
  } else {
    // update life
    const currentLife = getInnerTextById("current-life");
    const updatedLife = currentLife - 1;
    setInnerTextById("current-life", updatedLife);

    // prevent negative life and switch playground and score page
    if (updatedLife === 0) {
      gameOver();
    }
  }
}

// add it to the document
document.addEventListener("keyup", keyboardHandler);

function continueGame() {
  // generate a random Alphabet
  const alphabet = getRandomAlphabet();

  //   display the alphabet
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabet;

  //   setBackground color
  addBackgroundColor(alphabet);
}

function play() {
  // hide everything except play-ground
  hideElement("home-screen");
  hideElement("score");
  showElement("play-ground");

  // reset score and life for new round
  setInnerTextById("current-life", 5);
  setInnerTextById("current-score", 0);

  continueGame();
}

function gameOver() {
  showElement("score");
  hideElement("play-ground");

  // update final-score
  const finalScore = getInnerTextById("current-score");
  setInnerTextById("final-score", finalScore);

  // clear the last alphabet background
  const currentAlphabet = getElementById("current-alphabet");
  removeBackgroundColor(currentAlphabet);
}
