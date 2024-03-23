//Greeings: Start with the array you used in exercise 11, but instead of just printing each persons name, print a message to them, the text of each should be the same, but each message should be personalized with the persons name.

let members: string[] =['ali','shoaib','saad','hassan','saim'];
let message: string='We are enjoying our IT classes alot:';
for(let i=0; i<members.length; i++){
    console.log(message + members[i]);
}
