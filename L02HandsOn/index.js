
//Cubes, squares, and exponents. 
let value = 3
let exponent =2

const square = value => power(value)
const cube = value => value * value * value;
const power = (value, exponent = 2) => value ** exponent; 

console.log(square(value)); 
console.log(cube(value, 3)); 
console.log(power(value, exponent)); 

//def param//
const defParam = (a, b = 20) => a * b; 

defParam(3, 10);

//arrow activity. successful//

const doubleAge = age => age * 2
console.log(doubleAge)

// arrow activity 2 Write an arrow function named defaultParam that has two parameters: parameter a
//parameter b that has a default value of 10.
//The function should return the product of a and b.was not successful

const defParam = (paramA, paramB = 20) => paramA * paramB;
    return param1 * param2;
  //correct answer
  //const defaultParam = (a, b = 10) => {
    //return a * b;
//}
//arrow activity 3
//Write an arrow function named addName that takes two parameters named firstName and lastName, 
//then concatenates them with a space in between.

const addName = (firstName, lastName) => firstName + " " + lastName;

//successful
//switch activity 1 successful
let phoneNumberPresent = true;
let needsNumber;
switch(phoneNumberPresent) {
    case true:
      needsNumber = false; 
      break; 
    case false:
      needsNumber = true; 
      break;
    default:
      needsNumber= "Try Again";
}
      
//switch activity 2
//write a switch statement that checks selectedNumber:
//If selectedNumber is 23, then set output to "That's exactly what I was thinking, spoooky!"
//If selectedNumber is 9, set output to "How did you know?"
//In any other case, set output to "Better luck next time.".
//successful//
let selectedNumber = 23;
let output;
    switch (selectedNumber){
        case selectedNumber = 23:
         output = "That's exactly what I was thinking, spoooky!"
         break;
        case selectedNumber = 9:
            output = "How did you know?";
        break; 
        default:
            output = "Better luck next time.";
    }
//ternary activity
//Set the value of the movieRating variable to "PG-13" or "PG" depending on the value of the age variable. 
//The value of movieRating should be "PG-13" if age is greater than 12 and "PG" otherwise.
//Use the ternary operator to set the value of movieRating based upon age.
//Example: let movieRating = [INSERT TERNARY OPERATION HERE] successful

let age = 15;
let movieRating = "PG-13" || "PG";
const isOldEnough = age >= 15 ? "PG-13" : "Sorry, PG only";
console.log(isOldEnough);

//lesson 3 hands on

      



  
 






