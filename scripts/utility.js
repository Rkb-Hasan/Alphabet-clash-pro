function hideElement(id) {
  const element = document.getElementById(id);
  element.classList.add("hidden");
}

function showElement(id) {
  const element = document.getElementById(id);
  element.classList.remove("hidden");
}

function getRandomAlphabet() {
  // create alphabet array
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  //   get  random index between 0 to 25
  const randomIndex = Math.round(Math.random() * 25);
  const alphabet = alphabets[randomIndex];
  return alphabet;
}

function addBackgroundColor(id) {
  const el = document.getElementById(id);
  el.classList.add("bg-orange-400");
}

function removeBackgroundColor(id) {
  const el = document.getElementById(id);
  el.classList.remove("bg-orange-400");
}

function getInnerTextById(id) {
  const element = document.getElementById(id);
  const numValue = parseInt(element.innerText);
  return numValue;
}

function setInnerTextById(id, value) {
  const element = document.getElementById(id);
  element.innerText = value;
}

function getElementById(id) {
  const element = document.getElementById(id);
  const text = element.innerText;
  return text;
}
