//Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.
//Explain & TIP: This exercise introduces you to handling multiple specific conditions in an if-else chain.

let alien_colour: String = "green";

 if(alien_colour == "green"){
    console.log("the player just earned 5 points.");
}


else if(alien_colour == "yellow"){
    console.log("the player just earned 10 points.");
}

else if(alien_colour == "red"){
    console.log("the player just earned 15 points.");
}

else{
    console.log("please select right colour")
}

// version 2

alien_colour= "red";
if(alien_colour == "green"){
    console.log("the player just earned 5 points.");
}

else if(alien_colour == "yellow"){
    console.log("the player just earned 10 points.");
}

else if(alien_colour == "red"){
    console.log("the player just earned 15 points.");
}

else{
    console.log("please select right colour")
}

// version 3



alien_colour= "yellow";
if(alien_colour == "green"){
    console.log("the player just earned 5 points.");
}

else if(alien_colour == "yellow"){
    console.log("the player just earned 10 points.");
}

else if(alien_colour == "red"){
    console.log("the player just earned 15 points.");
}

else{
    console.log("please select right colour")
}