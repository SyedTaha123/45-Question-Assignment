function make_great2(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + '  the Great');
    }
    return greatMagicians;
}
var magicians3 = ["raheel", "amjad", "ajmal"];
show_magicians(magicians3);
show_magician(magicians2);
