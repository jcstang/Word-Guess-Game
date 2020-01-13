// Jacob Stanger
// Jan 2020
// game.js

// variables
var usrWins = 0;
var numGuessesRemaining = 0;
var currentWordToGuess = 'Elephant';

// TODO: start game
// TODO: pick a word
// TODO: display the underscores 

//var currWordDiv = document.getElementById('curr-word');
console.log('here is div: ' + document.getElementById('curr-word'));

var newWord = document.createElement("p");
newWord.textContent = currentWordToGuess;
console.log(newWord);
//currWordDiv.appendChild(newWord);
// newWord.textContent = currentWordToGuess;
// currWordDiv.appendChild(newWord);



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



// helpful code from the drink list activity

// // This line of JavaScript "grabs" the main div on the page ("#drink-options");
// var drinkDiv = document.getElementById("drink-options");

// // We then use a for loop to iterate through all the drinks in drinkList.
// // With each iteration, we perform a series of code operations each time.
// for (var i = 0; i < drinkList.length; i++) {

//   // For each drink in the array, we create a new paragraph to hold that text.
//   // A new paragraph will be created with each iteration of the loop.
//   var newDrinkP = document.createElement("p");

//   // We then assign the the text of this paragraph to be the text in the array.
//   newDrinkP.textContent = drinkList[i];

//   // We then add the paragraph to the our main div on the page ("#drink-options")
//   drinkDiv.appendChild(newDrinkP);
// }