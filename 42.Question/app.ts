//Question 42: Great Magicians: Add "the Great" to magician names.
//Explain & TIP: Modifying array contents within a function demonstrates how functions can change data. This shows the impact of passing arrays by reference.

function show_magicians(magicians: string[]): void {

    for (const magician of magicians){
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }




//function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++){
        magicians[i] = magicians[i]   + '  the great'

    }
//}

const magicians2: string[] = ["raheel","amjad","ajmal"];
make_great(magicians2);
show_magician(magicians2)