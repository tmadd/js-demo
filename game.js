// create secret number secretNum
var secretNum = 21;
// prompt user for guess
var stringGuess = prompt("what is your guess?");
var guess = Number(stringGuess);

// check if guess is right
if (guess === secretNum) {
    alert("You got it right!");
}
// prompt with error
else if(guess > secretNum) {
    alert("Too high!");
}

else {
    alert("Too low!");
}
// prompt with correct answer



