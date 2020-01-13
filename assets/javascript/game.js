// Jacob Stanger
// Jan 2020
// game.js

// =========================================
// game.js
// =========================================
// variables
var howManyWins = 0;
var numGuessesRemaining = 8;
var currentWordToGuess = 'Elephant';
var lettersGuessed = ['A', 'Q', 'E', 'I', 'T'];
var alphabetArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// TODO: start game
  // generate and 'display' a word (in underscores)

// display the current word to the DOM
var newWord = document.createElement("p");
newWord.textContent = currentWordToGuess;
// append
document.getElementById('curr-word').appendChild(newWord);

// display the score to the DOM
// document.getElementById('usr-win').textContent = howManyWins;
changeTextContent('usr-win', howManyWins);

// display the number of guess remaining
// document.getElementById('num-guess-remain').textContent = numGuessesRemaining;
changeTextContent('num-guess-remain', numGuessesRemaining);

//display the letters guessed
// document.getElementById('letters-guessed').textContent = lettersGuessed;
changeTextContent('letters-guessed', lettersGuessed)



// =========================================
// DOM - event listeners
// =========================================
document.onkeyup = function(event) {
  // console.log('here is something else about event: ' + event.key);

  // user has now pressed a key

  //check if it was a alphabet entry
  var upperCaseEvent = event.key.toUpperCase();
  // console.log("here is uppercaseevent: " + upperCaseEvent);

  // check for valid alphabet entry
  if ( alphabetArray.includes(upperCaseEvent) ) {
    console.log('validated guess: ' + event.key);
  }
  
  // check if it was a correct guess
    // if correct, score++ and update currentWordToGuess
    // if wrong guess, add and display chosen letter.
  // remove a guess available
  // display guess available

};

function changeTextContent(id, newValue) {
  document.getElementById(id).textContent = newValue;
}