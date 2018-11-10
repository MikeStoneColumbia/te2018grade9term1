const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  name: undefined,
  class : "Normal Human"
  abilities : new Array(3)
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  haki : 0,
  weapon: "fists",
  item: "none",
};

console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++;
  console.log(`${player.name} enters the dungeon`);
  // continue the story
  
  console.log(`${player.name} is confronted by three different roads.`);
  let crossroad = READLINE.question("Which path would you like to go down? Right, Left, Mid").toLowerCase();

  if(crossroad == "right"){

    console.log(`${player.name} has chosen to go down the right path, you walk into a holy chamber`);
    console.log("There is an altar with a shiny stone with a staff engraved in it.");
    console.log("The energy of the stone is radiating. It's almost as if it wants to become a part of you. Touch the stone?");

    let classDecision = READLINE.question("Yes? or No?");

    if(classDecision.toLowerCase == "yes"){

      console.log(`${player.name} tocuhes the stone, a flood of energy enters your body! You feel like you have awakened!`);
      player.abilities[0] = "Fireball"
      player.intellect += 50;
      consle.log(`${player.name} has transcended to a mage! You learned Fireball! `${player.name}'s intellect rose by 50!');

    }


  } else if(crossroad == "Left"){

    
    
  }

} else {
  player.intellect++;
  console.log(`${player.name} decides not to open the door. However...`);

}
console.log("Thanks for playing!");
