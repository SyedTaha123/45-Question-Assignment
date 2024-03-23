//Guest list: if you could invite anyonem, living or deceased to dinner who would you invite? make a list that include at least three people you would like to invite them to dinner, them use your list to print a message to each person, inviting them to dinner.  

let guest_list: string[]= ['Fahad', 'Ali', 'Osama', 'Hassan'];
for (let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Mam' + guest_list[i] + ',\n\'we have invited you to dinner tommorrow.\n\nThank you');
}
export{guest_list}