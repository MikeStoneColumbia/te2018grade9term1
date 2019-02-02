// **** Example: sayHello() ****
// Write a function expression that returns "Hello " along with whatever string is
// passed in as an argument.
let sayHello = function(str) {
  return `Hello ${str}`;
}

// Test your function at least three times below
console.log("Example Tests:");
console.log(sayHello("World"));
console.log(sayHello("Yarency"));
console.log(sayHello("Luis"));

// **** Problem 1: getQuotient() ****
// Write a function expression that returns the quotient of the first argument
// divided by the second.

let division = function(num1,num2){

console.log(num1/num2);
return num1/num2

}

// Test your function at least three times below
console.log("Problem 1 Tests:");

division(10,5);

// **** Problem 2: sumDouble() ****
// Write a function expression that, when given two number values, return their
// sum. Unless the two values are the same, then return double their sum.

let addition =function(num1,num2){

	if(num1 == num2){

		return num1 * 2;

	}else{

		return num1 + num2;

	}

}

// Test your function at least three times below
console.log("Problem 2 Tests:");

console.log(addition(2,2));
console.log(addition(2,3));

// **** Problem 3: makes10() ****
// Write a function expression that, when govem 2 numbers, a and b, returns true
// if one if them is 10 or if their sum is 10.

let magicTen = function(num1,num2){

	if(num1 == 10 || num1 + num2 == 10){

		return true;

	}else{

		return false;

	}

}

// Test your function at least three times below
console.log("Problem 3 Tests:");

console.log(magicTen(10,0));
console.log(magicTen(5,2));

// **** Problem 4: Object Methods ****
// Write code that represents any object you like. Your object should have at
// least four properties and four methods. At least two of your methods should
// utilize the "this" keyword to refer to properties, or call other methods,
// owned by the object.


// Test all of your object's methods below.
console.log("Problem 4 Tests:");
