//Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
//Explain & TIP: Objects in TypeScript can store various related data about a single entity. Think of an object as a container for characteristics of something, like a book or a car.


interface item {
    name:string
    price:number
}
//create two objects
const book:item ={
    name:'HEADWAY OXFORD'
    price:300
}
const watch: item ={
    name:'watch'
    price:200
}
console.log(`book name: ${book.name}, price: $${book.price}`)
console.log(`watch name: ${watch.name}, price: $${watch.price}`)