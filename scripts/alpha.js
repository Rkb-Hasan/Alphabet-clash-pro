// function play() {
//   const homeScreen = document.getElementById("home-screen");
//   const playGround = document.getElementById("play-ground");
//   // hide home section
//   homeScreen.classList.add("hidden");
//   //   display play-ground
//   playGround.classList.remove("hidden");
// }

// handle keyboard press

// adding audio
const audio = new Audio();

const artBoard = document.getElementById("art-board");

//validating if the game is on
let isGamePlayOn = false;

function keyboardHandler(e) {
  // out of the function if play button is not clicked
  if (isGamePlayOn == false) return;
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
    // add sound
    audio.src = "../audio/success.mp3";
    audio.play();

    // update score
    const currentScore = getInnerTextById("current-score");
    const updatedScore = currentScore + 1;
    setInnerTextById("current-score", updatedScore);
    // play another round
    continueGame();
    // clear the background of pressed key
    removeBackgroundColor(currentAlphabet);
  } else {
    // add sound
    audio.src = "../audio/invalid.mp3";
    audio.play();

    // back-ground change

    // update life
    const currentLife = getInnerTextById("current-life");
    const updatedLife = currentLife - 1;

    // set background as the updated life
    const updatedLifePercentage = (updatedLife / 5) * 100;
    artBoard.style.background = `linear-gradient(#B4B4BAB3 ${updatedLifePercentage}%,red)`;

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

  // validating if the paly btn is pressed
  isGamePlayOn = true;
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
  // validating the sound
  isGamePlayOn = false;
  // reset background
  artBoard.style.background = "linear-gradient(#B4B4BAB3 100%,red)";
}
