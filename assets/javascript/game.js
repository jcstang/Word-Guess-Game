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
//var currentWordToGuess = 'Elephant';
var currentWord = '';
var currentWordBlank = [];
// var currWordToGuessArray = ['E', 'L', 'E', 'P', 'H', 'A', 'N', 'T'];
var currWordToGuessArray = [];
var lettersGuessed = ['A', 'Q', 'E', 'I', 'T'];
var lettersGuessedArray = [];
var alphabetArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


// =====================
// start of game
// =====================
  // pick a word from a list
  // how many underscores are there?
  // display that number of underscores on screen

  // display the score to the DOM
  changeTextContent('usr-win', howManyWins);
  // display the number of guess remaining
  changeTextContent('num-guess-remain', numGuessesRemaining);
  //display the letters guessed
  // changeTextContent('letters-guessed', lettersGuessed);


  // TODO: display the underscores
    // pick a word from list
  var wordIndexChoice = Math.floor( Math.random() * arrayOfWords.length );
  console.log("here is wordIndexChoice: " + wordIndexChoice);
  currentWord = arrayOfWords[ wordIndexChoice ];
  console.log("here is currentWord: " + currentWord);

  // count and fill the underscore thing
  // string into an array
  currWordToGuessArray = currentWord.split('');
  console.log("here is currentWordBlank: " + currWordToGuessArray);
  
  // converts current word array to an array of spaces
  for (let i = 0; i < currWordToGuessArray.length; i++) {
    if (currWordToGuessArray[i] === ' ') {
      // console.log("hey we got a space at index: " + i);
      currentWordBlank.push(' ');
    } else {
      currentWordBlank.push('_');
    }

  }
  console.log("here is currentWordBlank: " + currentWordBlank);


  //displays the current word array of spaces. currentWordBlank
  var displayWord = convertArrayToString(currentWordBlank);

  //display the current word to the DOM
  displayNewPtag('curr-word', displayWord);









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
    //TODO: add the letter to letters guessed array. if they win, score++?
    lettersGuessedArray.push(event.key + ',');
    // lettersGuessedArray.push(',');

    console.log('lettersGuessArray: ' + lettersGuessedArray);
    
    var displayLettersGuessed = convertArrayToString(lettersGuessedArray);
    changeTextContent('letters-guessed', displayLettersGuessed);
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