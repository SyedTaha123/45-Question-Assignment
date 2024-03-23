//Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.
//Explain & TIP: Use a loop and an if-else chain to append the correct ordinal suffix to numbers. This introduces you to combining loops with conditional logic for formatting.


let numbers : number [] =[1,2,3,4,5,6,7,8,9]

for (let number of numbers){

if (number === 1) {
    console.log(`${number}st`)
}else if (number === 2){
    console.log(`${number}nd`)
}else if (number === 3){
    console.log(`${number}rd`)
}else {
    console.log(`${number}th`)
}
}