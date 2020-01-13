// Jacob Stanger
// Jan 2020
// game.js

// =========================================
// game.js
// =========================================
// variables
var usrWins = 0;
var numGuessesRemaining = 8;
var currentWordToGuess = 'Elephant';

// TODO: start game
// TODO: pick a word
// TODO: display the underscores 


// display the current word to the DOM
var newWord = document.createElement("p");
newWord.textContent = currentWordToGuess;
// append
document.getElementById('curr-word').appendChild(newWord);

// display the score to the DOM
document.getElementById('usr-win').textContent = usrWins;

// display the number of guess remaining
document.getElementById('num-guess-remain').textContent = numGuessesRemaining;



// =========================================
// DOM - event listeners
// =========================================
document.onkeyup = function(event) {
  console.log('here is the event: ' + event);
  console.log('here is something else about event: ' + event.key);

  // user has now pressed a key
  
  // check if it was a correct guess
    // if correct, score++ and update currentWordToGuess
    // if wrong guess, add and display chosen letter.
  // remove a guess available
  // 

};