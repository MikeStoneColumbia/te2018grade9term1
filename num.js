const READLINE = require("readline-sync");


let number = 4;
let guess = READLINE.question("Guess my number: ");
if (guess < 4) {
	console.log("Too low");
}
else if (guess > 4) {
	console.log("Too high");
}
else {
	console.log("Winner!");
}

