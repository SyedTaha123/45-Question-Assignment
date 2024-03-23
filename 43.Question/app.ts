
//Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.

//Explain & TIP: Creating a copy of an array before modifying it allows you to maintain the original data. This exercise demonstrates array copying and manipulation.


function make_great2(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++){
        greatMagicians.push(magicians[i]   + '  the Great');

    }
    return greatMagicians;
}

const magicians3: string[] = ["raheel","amjad","ajmal"];
show_magicians(magicians3);
show_magician(magicians2)