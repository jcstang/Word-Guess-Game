

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
    // code here
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

  isValidInput: function () {
    // code
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

  displayNewPtag: function () {
    //code
  },

  updateGuessRemaining: function () {
    this.changeTextContentOfId('num-guess-remain', numGuessesRemaining);
    var displayLettersGuessed = this.convertArrayToString(this.lettersGuessedArray);
    this.changeTextContentOfId('letters-guessed', displayLettersGuessed);
  },

  removeOneGuess: function () {
    //stuff
  },

  fillOutBlankArray: function () {
    // code here
  }


};