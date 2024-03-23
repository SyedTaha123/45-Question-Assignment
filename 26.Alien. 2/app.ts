//Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.
//Explain & TIP: Expanding on the previous exercise, if-else chains allow you to handle multiple conditions.


// choose a clor for an alien as you
// did in excercise 25, and write an if-else chain.
//

let alien_colour: String = "green";

if(alien_colour == "green"){
    console.log("the player just earned 5 points for shooting the alien.");
}
else{
    console.log("the player just earned 10 points.")
}
alien_colour = "red";
if(alien_colour == "green"){
console.log("the player just earned 5 points for shooting the alien.");
}