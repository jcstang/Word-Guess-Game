

// board game

var wordGuessGame = {
  "alphabetArray": [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ],
  "poolOfWordsArray": [
    'slap bracelets',
    'reading rainbow',
    'walkman',
    'airplane',
    'the blues brothers',
    'leg warmers',
    'scrunchies',
    'madonna',
    'rob lowe',
    'michael jackson',
    'axel rose',
    'star wars',
    'molly ringwald',
    'cyndi lauper'
  ],
  "score": 0,
  "number of guesses remain": 8,
  "currentWord": '',
  "currentWordBlankArray": [],
  "currentWordToGuessArray": [],
  "lettersGuessedArray": [],
  "winCountToReset": 3,
  "didUserWin": false,

  startGame: function () {
    this.resetGameVariables();

    this.changeTextContentOfId('usr-win', this.score);
    this.changeTextContentOfId('num-guess-remain', this["number of guesses remain"]);

    var wordIndexChoice = Math.floor(Math.random() * this.poolOfWordsArray.length);
    this.currentWord = this.poolOfWordsArray[wordIndexChoice];

    this.currentWordToGuessArray = this.currentWord.split('');
    console.log('here is this.currentWordToGuessArray: ' + this.currentWordToGuessArray);

    this.fillOutBlankArray();

    var displayWord = this.convertArrayToString(this.currentWordBlankArray);
    this.displayNewPtag('curr-word', displayWord);
  },

  resetGameVariables: function () {
    //code
    wordGuessGame["number of guesses remain"] = 8;
    wordGuessGame.currentWord = '';
    this.currentWordBlankArray = [];
    this.currentWordToGuessArray = [];
    this.lettersGuessedArray = [];
    this.didUserWin = false;
  },

  isValidInput: function(key) {
    var retVal = true;
    // normalize input
    var upperCaseGuess = key.toUpperCase();
    retVal = this.alphabetArray.includes(upperCaseGuess);
    
    return retVal;
  },

  changeTextContentOfId: function(id, newValue) {
    document.getElementById(id).textContent = newValue;
  },

  convertArrayToString: function(arr) {
    var returnWord = '';

    for (let i = 0; i < arr.length; i++) {
      returnWord += arr[i];
    }

    return returnWord
  },

  displayNewPtag: function(id, newValue) {
    var newWord = document.createElement('p');
    newWord.textContent = newValue;
    document.getElementById(id).appendChild(newWord);
  },

  updateGuessRemaining: function() {
    this.changeTextContentOfId('num-guess-remain', this["number of guesses remain"]);
    var displayLettersGuessed = this.convertArrayToString(this.lettersGuessedArray);
    this.changeTextContentOfId('letters-guessed', displayLettersGuessed);
  },

  removeOneGuess: function () {
    this["number of guesses remain"]--;
    this.updateGuessRemaining();
  },

  fillOutBlankArray: function() {
    for (let i = 0; i < this.currentWordToGuessArray.length; i++) {
      if(this.currentWordToGuessArray[i] === ' ') {
        this.currentWordBlankArray.push(' ');
      } else {
        this.currentWordBlankArray.push('_');
      }
      
    }
  }
};

// ===================================================
// start of game
// ===================================================

wordGuessGame.startGame();

document.onkeyup = function(event) {

  var isValidKeyboardInput = wordGuessGame.isValidInput(event.key);
  var isUserGuessCorrect = wordGuessGame.currentWordToGuessArray.includes(event.key);

  
  if (isValidKeyboardInput) {
    
    if (isUserGuessCorrect){
      wordGuessGame.changeTextContentOfId('end-of-game', '');
      wordGuessGame.updateGuessRemaining();

      for (let i = 0; i < wordGuessGame.currentWordToGuessArray.length; i++) {
        
        if (event.key === wordGuessGame.currentWordToGuessArray[i]) {
          wordGuessGame.currentWordBlankArray[i] = event.key;
        }

        
      }

      //update view of page
      wordGuessGame.changeTextContentOfId('curr-word', wordGuessGame.convertArrayToString(wordGuessGame.currentWordBlankArray));
      if (wordGuessGame.currentWordBlankArray.indexOf('_') === -1) {
        console.log('you win!');
        wordGuessGame.changeTextContentOfId('end-of-game', 'YOU WIN!!!!');

        wordGuessGame.resetGameVariables();
        wordGuessGame.startGame();

        wordGuessGame.score++;

        if (wordGuessGame.score > wordGuessGame.winCountToReset) {
          wordGuessGame.changeTextContentOfId('end-of-game', 'Cool! you have won enough!');
          wordGuessGame.score = 0;
        }

        wordGuessGame.changeTextContentOfId('usr-win', wordGuessGame.score);

      }

    } else {
      wordGuessGame.lettersGuessedArray.push(event.key);

      if (wordGuessGame["number of guesses remain"] > 0) {
        wordGuessGame.removeOneGuess();

      } else {
        wordGuessGame.changeTextContentOfId('end-of-game', 'END OF GAME!!!');
      }
    }

  } // end of valid keyboard input
};