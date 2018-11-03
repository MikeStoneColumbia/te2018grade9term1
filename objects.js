// Write your code below!

let person = {firstName: "michael ", lastName: "Stone", age :19}

console.log(person.firstName);

function character(firstName,lastname,age,eyecolor){

this.firstName = firstName;
this.lastname =lastname;
this.age = age;
this.eyecolor = eyecolor;

}

Luffy = new character("Monkey", "Luffy", 19, "brown")
console.log(Luffy.firstName,Luffy.lastname,Luffy.age,Luffy.eyecolor);