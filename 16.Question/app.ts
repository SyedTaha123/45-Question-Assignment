// Tast 16

let guest_list: string[]= ['Hira', 'Sona', 'Sania', 'Hooria'];
// for (let i=0; i<guest_list.length; i++){
   // console.log('Respected Sir/Mam' + guest_list[i] + ',\n\'we have invited you to dinner tommorrow.\n\nThank you');
//}
let not_present : string = 'Sona';
let new_guest : string = 'Asif';
guest_list[1]= new_guest;
for (let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Mam' + guest_list[i] + ',\n\'we have invited you to dinner tommorrow.\n\nThank you');
}
guest_list.unshift('Zain','Adil','Taj');
for (let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Mam' + guest_list[i] + ',\n\'we have invited you to dinner tommorrow because we found 3 more big tables.\n\nThank you');
}
