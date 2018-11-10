// Remove block comments when ready to debug a program.
//import all packages being used 
const READLINE = require("readline-sync");
// Program #1: "Careless"

let x = 3; // not corredct variable assignment use only one = 
if(x => 3) { //close parantheses 
  x++; // too many +
} else { // make sure brackets match 
	//else is key word cant be capitalized
  x += 2;//match variable names capitalization matters 
}
console.log(x);


// Program #2: "Bad logic and math"

let money = 28;
//contradictory; if loops should run at some point 
if(money > 20 && money <= 50) { 

  money = money/ 2;
} else {
  money = 0;
}

console.log(money);

// Program #3: "And what else?"
//ZA Wardo
let num1 = READLINE.question("Enter num1: ");
let num2 = READLINE.question("Enter num2: ");
let num3 = READLINE.question("Enter num3: ");

//logic wasnt comlete has to check all 3 numbers 
if(num1 > num2) {
	if(num1 > num3){

		  console.log(`${num1} is the largest value.`);

	}

}
else if(num2 > num3) {
	if(num2 > num1){

		 console.log(`${num2} is the largest value.`);

	}
 
}
else {
  console.log(`${num3} is the largest value.`);
}

