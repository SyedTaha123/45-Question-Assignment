//Question 35: Animals: Highlight animals with a common trait.
//Explain & TIP: Looping through an array of animals allows you to comment on each one individually. This teaches you how to personalize messages within a loop based on array items.

let animals: string []= ["tigger","elephant","cat"]
for(let animal of animals) {
    console.log(animal)
}
console.log ("\n")


for(let animal of animals) {
    console.log(` A ${animal} has a tail `)
}

console.log("\n I like all these pets! but i really love tigger most ")


