//Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.
//Explain & TIP: Conditional tests check if something is true or false. Writing different tests helps you understand how conditions work in programming.

let car : String = 'subaru';

// test 1: equality comparison (true)
console.log("Is car == 'subaru'? I predict True." );
console.log(car == 'subaru'); //True

// test 2: Strict equality comparison (true)
console.log("Is car === 'subaru'? I predict True." );
console.log(car === 'subaru'); //True

// test 3:Inequality comparison (False)
console.log("Is car != 'subaru'? I predict False." );
console.log(car != 'subaru'); //False

// test 4:Strict Inequality comparison (False)
console.log("Is car !== 'subaru'? I predict False." );
console.log(car !== 'subaru'); //False

// test 5:Less than comparison (False)
console.log("Is car < 'subaru'? I predict False." );
console.log(car < 'subaru'); //False (lexicographic comparison)

// test 6:Greater than comparison (False)
console.log("Is car > 'subaru'? I predict False." );
console.log(car > 'subaru'); //False (lexicographic comparison)

// test 7:Less than or equal comparison (True)
console.log("Is car <= 'subaru'? I predict True." );
console.log(car <= 'subaru'); //True

// test 8:Greater than or Equal comparison (True)
console.log("Is car >= 'subaru'? I predict True." );
console.log(car >= 'subaru'); //True

// test 9:checking truthiness (True)
console.log("Is car? 'subaru'? I predict True." );
console.log(car); //True (non empty string is truthly) 

// test 10:checking falsiness (False)
console.log("Is !car? 'subaru'? I predict False." );
console.log(!car); //False ( negation of a truthly value) 