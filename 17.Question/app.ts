//Task 17

let guest_list: string[]= ['Hira', 'Sona', 'Sania', 'Hooria'];
// for (let i=0; i<guest_list.length; i++){
   // console.log('Respected Sir/Mam' + guest_list[i] + ',\n\'we have invited you to dinner tommorrow.\n\nThank you');
//}
let not_present : string = 'Sona';
let new_guest : string = 'Asif';
guest_list[1]= new_guest;
//for (let i=0; i<guest_list.length; i++){w
  //  console.log('Respected Sir/Mam' + guest_list[i] + ',\n\'we have invited you to dinner tommorrow.\n\nThank you');
//}
guest_list.unshift('Zain','Adil','Taj');
//for (let i=0; i<guest_list.length; i++){
  //  console.log('Respected Sir/Mam' + guest_list[i] + ',\n\'we have invited you to dinner tommorrow because we found 3 more big tables.\n\nThank you');
//}
console.log('\nunfortunately we could not arrange big table that is why we allow just two persons.\n' )
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`Sorry Sir/Madam.${remove_guest} you are not invited for dinner.`);
}
for (let i=0; i<guest_list.length; i++){
   console.log('Respected Sir/Mam' + guest_list[i] + ',\n\'You are still invited tomorrow dinner.\n\Thank you');
   guest_list.splice(0.2)
   console.log(guest_list)
}
