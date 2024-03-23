var car = 'subaru';
var age = 25;
var numbers = [1, 2, 3, 4];
//Test 1: Equality (True)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); //True (case-insensitive)
//tEST 2: Strick equality (false)
console.log("Is car === 'subaru'? I predict False.");
console.log(car === 'subaru'); //False (case-sensitive)
//Test 3: Inequality (True)
console.log("Is car != 'Toyota'? I predict True.");
console.log(car != 'Toyota'); //True 
//tEST 4: Inequality (False)
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); //False (case-sensitive)
//Lowercase Function Tests**
//Test 5: Lowercase conversion (True)
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car === car.toLowerCase()); //True
//Test 6: Lowercase conversion (False)
console.log("Is car === car.toLowerCase()? I predict False.");
console.log(car === car.toLowerCase()); //False
// **Numercial Tests**
// Test 7: Equality (True)
console.log("Is age == 25? I predict True.");
console.log(age == 25); //True
// Test 8: Inequality (False)
console.log("Is age != 30? I predict True.");
console.log(age != 30); //True
// Test 9: Greater than (False)
console.log("Is age > 30? I predict False.");
console.log(age > 30); //False
// Test 10: Less than or equal (True)
console.log("Is age <= 25? I predict True.");
console.log(age <= 25); //True
//**Logical Operators**
// Test 11: AND (True)
console.log("Is age > 20 && age < 30? I predict True.");
console.log(age > 20 && age < 30); //True (both conditions met)
//Test 12: OR (False)
console.log("Is age > 30 || age < 18? I predict False.");
console.log(age > 30 || age < 18); //False (neither conditions met)
// **Array Tests**
// Test 13:In Array (True)
console.log("Is 3 in numbers? I predict True.");
console.log(3 in numbers); //True (checks for index existence)
// Test 14:Not in Array (False)
console.log("Is 5 not in numbers? I predict True.");
console.log(5, not in numbers); //True (negation of "in" operator)
