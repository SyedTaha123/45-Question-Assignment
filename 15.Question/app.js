var guest_list = ['Hira', 'Sona', 'Sania', 'Hooria'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Mam' + guest_list[i] + ',\n\'we have invited you to dinner tommorrow.\n\nThank you');
}
var not_present = 'Sona';
var new_guest = 'Asif';
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Mam' + guest_list[i] + ',\n\'we have invited you to dinner tommorrow.\n\nThank you');
}
console.log("Mr. ".concat(not_present, " will not coming on dinner."));
