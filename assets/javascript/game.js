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

startWordGuessGame();



// ====================================================
// DOM - event listeners
// ====================================================
document.onkeyup = function (event) {
  // check if it was a correct guess
    // does the guess exist in the currWordToGuessArray???
  // if correct, score++ and update currentWordToGuess
  // if wrong guess, add and display chosen letter.
    // remove a guess availalbe and display guesses left

  var isValidKeyboardInput = isValidInput(event.key);
  var isUserGuessCorrect = currWordToGuessArray.includes(event.key);


  if (isValidKeyboardInput) {
    

    if (isUserGuessCorrect) {
      console.log('it DOES include the letter: ' + event.key);
      // TODO: fill out the underscore array in the correct spot
      // TODO: if all filled out, score++
      updateGuessRemaining();

    for (let i = 0; i < currWordToGuessArray.length; i++) {

      if (event.key === currWordToGuessArray[i]) {
        currentWordBlank[i] = event.key;
      }
      
    }
    console.log("here is currentWordBlank: " + currentWordBlank);
    //update the view of page
    changeTextContent('curr-word', convertArrayToString(currentWordBlank) );



    } else {
      lettersGuessedArray.push(event.key);
      console.log('NO it DOES NOT include the letter: ' + event.key);
      if (numGuessesRemaining > 0) {
        removeOneGuess();
      } else {
        changeTextContent('end-of-game', 'END OF GAME!!!!!');
        // FIXME: need to work on reseting more things
        // startWordGuessGame();
      }
    }

  }


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

function updateGuessRemaining() {
  changeTextContent('num-guess-remain', numGuessesRemaining);
  var displayLettersGuessed = convertArrayToString(lettersGuessedArray);
  changeTextContent('letters-guessed', displayLettersGuessed);
}

function removeOneGuess() {
  numGuessesRemaining--;
  updateGuessRemaining();
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
  // pick a word from a list
  // how many underscores are there?
  // display that number of underscores on screen

  changeTextContent('usr-win', howManyWins);
  changeTextContent('num-guess-remain', numGuessesRemaining);

  var wordIndexChoice = Math.floor(Math.random() * arrayOfWords.length);
  console.log("here is wordIndexChoice: " + wordIndexChoice);
  currentWord = arrayOfWords[wordIndexChoice];
  console.log("here is currentWord: " + currentWord);

  currWordToGuessArray = currentWord.split('');
  console.log("here is currentWordToGuessArray: " + currWordToGuessArray);

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