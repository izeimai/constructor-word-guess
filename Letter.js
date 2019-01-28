
// Letter Constructor
var Letter = function (val) {
    // A string value to store the underlying character for the letter
    this.val = val;
    // A boolean value that stores whether that letter has been guessed yet
    // will default to false to begin with because no guesses are made yet
    this.guessed = false;
    // A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.displayLetter = function () {
        if (this.guessed) {
            return this.val;
        } else {
            return "_";
        }
    };
    // A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.checkGuess = function (char) {
        if (char === this.val) {
            this.guessed = true;
        }
    }
}

module.exports.Letter = Letter;

// Used the following to make sure that the functions worked (and switched out return to console.log)
// var firstLetter = new Letter('a');
// firstLetter.displayLetter();
// firstLetter.checkGuess('a')
// firstLetter.displayLetter();




