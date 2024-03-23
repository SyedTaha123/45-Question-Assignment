//Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.

//Explain & TIP: Utilizing rest parameters allows functions to accept an indefinite number of arguments, useful for handling lists of data like sandwich ingredients.

function sandwich(...items: string[]): void {
    console.log("sandwich order;")

    for (let i =0; < items.length: i++) {
        console.log(` = ${items[i]}`)
    }
}
console.log("I love club sandwich")

sandwich('tikka','malaiboti','beef')
sandwich('mayo source','chiken','tomato')
sandwich('kabab','olives','chiken')
