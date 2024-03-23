var guest_list = ['Hira', 'Sona', 'Sania', 'Hooria'];
// for (let i=0; i<guest_list.length; i++){
// console.log('Respected Sir/Mam' + guest_list[i] + ',\n\'we have invited you to dinner tommorrow.\n\nThank you');
//}
var not_present = 'Sona';
var new_guest = 'Asif';
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Mam' + guest_list[i] + ',\n\'we have invited you to dinner tommorrow.\n\nThank you');
}
guest_list.unshift('Zain', 'Adil', 'Taj');
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Mam' + guest_list[i] + ',\n\'we have invited you to dinner tommorrow because we found 3 more big tables.\n\nThank you');
}
