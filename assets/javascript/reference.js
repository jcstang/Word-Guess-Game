// ==============================================================================
// Copying from the car game in the 03-04 activities to see how to make a object
// ==============================================================================

var gandalf = {
  "real name": "Gandalf",
  "age (est)": 11000,
  "race": "Maia",
  "haveRetirementPlan": true,
  "aliases": [
    "Greyhame",
    "Stormcrow",
    "Mithrandir",
    "Gandalf the Grey",
    "Gandalf the White"
  ]
};

// Object properties can be accessed with "bracket notation"
console.log("My name is " + gandalf["real name"]);

// Or with "dot notation" if the property has no spaces
if (gandalf.haveRetirementPlan) {

  // Or with a variable that matches the name of the property
  var ageProperty = "age (est)";
  var years = gandalf[ageProperty];
  console.log("My 401k has been gathering interest for " + years + " years!");
}

// You can access arrays and their properties from an object
console.log("I have more than " + gandalf.aliases.length + " aliases");

// Non-existent properties return undefined
console.log("My designation is " + gandalf["designation"]);



// VARIABLES
// ==========================================================================
var car = {
  make: "Honda",
  model: "Fit",
  color: "Blue Raspberry",
  mileage: 3000,
  isWorking: true,

  driveToWork: function () {
    console.log("Old Mileage: " + this.mileage);

    this.mileage = this.mileage + 8;

    console.log("New mileage: " + this.mileage);
  },

  driveAroundWorld: function () {
    console.log("Old Mileage: " + this.mileage);

    this.mileage = this.mileage + 24000;

    console.log("New Mileage: " + this.mileage);
    console.log("Car needs a tuneup!");

    this.isWorking = false;
  },

  getTuneUp: function () {
    console.log("Car is ready to go!");
    this.isWorking = true;
  },

  honk: function () {
    console.log("Honk! Honk!");
  }
};






// FUNCTIONS
// ==============================================================================

// Logs all of our car's current stats to the console.
function reWriteStats() {
  console.log("Make: " + car.make);
  console.log("Model: " + car.model);
  console.log("Color:" + car.color);
  console.log("Mileage: " + car.mileage);
  console.log("Is Working: " + car.isWorking);
  console.log("------------------------------");
}

// MAIN PROCESS
// ==============================================================================

// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
document.onkeyup = function (event) {

  // Captures the key press, converts it to lowercase, and saves it to a variable.
  var letter = event.key.toLowerCase();

  // If the letter is h, run the following functions/methods.
  if (letter === "h") {
    car.honk();
    reWriteStats();
  }

  // If the letter is d, run the following functions/methods.
  if (letter === "d") {
    car.driveToWork();
    reWriteStats();
  }

  // If the letter is w, run the following functions/methods.
  if (letter === "w") {
    car.driveAroundWorld();
    reWriteStats();
  }

  // If the letter is t, run the following functions/methods.
  if (letter === "t") {
    car.getTuneUp();
    reWriteStats();
  }
};