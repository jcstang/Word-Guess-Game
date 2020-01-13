// Jacob Stanger
// Jan 2020
// game.js

// =========================================
// game.js
// =========================================
// variables
var arrayOfWords = ['slap bracelets', 'reading rainbow', 'walkman', 'airplane', 'the blues brothers'];
var howManyWins = 0;
var numGuessesRemaining = 8;
var currentWord = '';
var currentWordBlank = [];
// var currWordToGuessArray = ['E', 'L', 'E', 'P', 'H', 'A', 'N', 'T'];
var currWordToGuessArray = [];
var lettersGuessed = ['A', 'Q', 'E', 'I', 'T'];
var lettersGuessedArray = [];
var alphabetArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


// ===================================================
// start of game
// ===================================================
// pick a word from a list
// how many underscores are there?
// display that number of underscores on screen

startWordGuessGame();



// ====================================================
// DOM - event listeners
// ====================================================
document.onkeyup = function (event) {

  // checking for valid input 
  if (isValidInput(event.key)) {

    lettersGuessedArray.push(event.key);

    //chances left
    if (numGuessesRemaining > 0) {
      removeOneGuess();
    } else {
      changeTextContent('end-of-game', 'END OF GAME!!!!!');
      // FIXME: need to work on reseting more things
      // startWordGuessGame();
    }
  }

  // check if it was a correct guess
  // if correct, score++ and update currentWordToGuess
  // if wrong guess, add and display chosen letter.
  // remove a guess available
  // display guess available

};






// ===========================================================
// custom Functions 
// ===========================================================
function changeTextContent(id, newValue) {
  document.getElementById(id).textContent = newValue;
}

function displayNewPtag(id, newValue) {
  var newWord = document.createElement("p");
  newWord.textContent = newValue;
  document.getElementById(id).appendChild(newWord);
}

function convertArrayToString(arr) {
  //stuff here
  var returnWord = '';

  for (let i = 0; i < arr.length; i++) {
    returnWord += arr[i];

  }
  console.log("convertArrayToString: " + returnWord);

  return returnWord;

}

function removeOneGuess() {
  numGuessesRemaining--;
  changeTextContent('num-guess-remain', numGuessesRemaining);
  var displayLettersGuessed = convertArrayToString(lettersGuessedArray);
  changeTextContent('letters-guessed', displayLettersGuessed);
}

function isValidInput(key) {
  //normalizing input
  var retVal = true;
  console.log('validated guess: ' + key);
  var upperCaseGuess = key.toUpperCase();
  retVal = alphabetArray.includes(upperCaseGuess);

  console.log("here is retVal: " + retVal);

  return retVal;
}

function startWordGuessGame() {

  changeTextContent('usr-win', howManyWins);
  changeTextContent('num-guess-remain', numGuessesRemaining);
  var wordIndexChoice = Math.floor(Math.random() * arrayOfWords.length);
  console.log("here is wordIndexChoice: " + wordIndexChoice);
  currentWord = arrayOfWords[wordIndexChoice];
  console.log("here is currentWord: " + currentWord);

  currWordToGuessArray = currentWord.split('');
  console.log("here is currentWordBlank: " + currWordToGuessArray);

  for (let i = 0; i < currWordToGuessArray.length; i++) {
    if (currWordToGuessArray[i] === ' ') {
      // console.log("hey we got a space at index: " + i);
      currentWordBlank.push(' ');
    } else {
      currentWordBlank.push('_');
    }
  
  }

  //displays the current word array of spaces. currentWordBlank
  var displayWord = convertArrayToString(currentWordBlank);

  //display the current word to the DOM
  displayNewPtag('curr-word', displayWord);

}

function startWordGuessGame() {

  changeTextContent('usr-win', howManyWins);
  changeTextContent('num-guess-remain', numGuessesRemaining);
  var wordIndexChoice = Math.floor(Math.random() * arrayOfWords.length);
  console.log("here is wordIndexChoice: " + wordIndexChoice);
  currentWord = arrayOfWords[wordIndexChoice];
  console.log("here is currentWord: " + currentWord);

  currWordToGuessArray = currentWord.split('');
  console.log("here is currentWordBlank: " + currWordToGuessArray);

  for (let i = 0; i < currWordToGuessArray.length; i++) {
    if (currWordToGuessArray[i] === ' ') {
      // console.log("hey we got a space at index: " + i);
      currentWordBlank.push(' ');
    } else {
      currentWordBlank.push('_');
    }
  
  }

  //displays the current word array of spaces. currentWordBlank
  var displayWord = convertArrayToString(currentWordBlank);

  //display the current word to the DOM
  displayNewPtag('curr-word', displayWord);

}