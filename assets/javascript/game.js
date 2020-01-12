// Jacob Stanger
// Jan 2020
// game.js

// variables
var usrWins = 0;
var numGuessesRemaining = 0;
var currentWordToGuess = 'Elephant';


document.onkeyup = function(event) {
  console.log('here is the event: ' + event);
  console.log('here is something else about event: ' + event.key);
  
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