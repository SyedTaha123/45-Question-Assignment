//Question 39: City Names: Formatting city-country pairs.
//Explain & TIP: Returning formatted strings from functions can simplify data presentation. This exercise practices string formatting and returning values from functions.

function cityCountry(city: string,country: string): string {
    return `${city}, ${country}`
}

let c1 =cityCountry('lahore','pakistan')
let c2 =cityCountry('washington','america')
let c3 =cityCountry('melbourn','australia')

console.log(c1)
console.log(c2)
console.log(c3)