//Changing guest list: you just heard that one of your guest cant make a dinner, so you need to send out a new set of invitation, you will have to think of someone else to invite.   

let guest_list: string[]= ['Hira', 'Sona', 'Sania', 'Hooria'];
for (let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Mam' + guest_list[i] + ',\n\'we have invited you to dinner tommorrow.\n\nThank you');
}
let not_present : string = 'Sona';
let new_guest : string = 'Asif';
guest_list[1]= new_guest;
for (let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Mam' + guest_list[i] + ',\n\'we have invited you to dinner tommorrow.\n\nThank you');
}
console.log(`Mr. ${not_present} will not coming on dinner.`)
