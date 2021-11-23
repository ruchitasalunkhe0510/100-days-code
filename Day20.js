//new feature in javaScript

// var x = 10; // x is 10
// let x = 10; // x is 10
// const x = 10; // x is 10

//Arrow function : Arrow functions allows a short syntax for writing function expressions.
// You don’t need the function keyword, the return keyword, and the curly brackets.

//ES5
// var x = function (x, y) {
//   return x * y;
// };
//ES6
// const x = (x, y) => x * y;

//classes
// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
// }

// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
// }
// mycar = new car("Ford");

//Default parameter value
// function myFunction(x, y = 10) {
//   return x + y;
// }
// myFunction(5); //will return 15

//Array.find():
// var numbers = [4, 9, 16, 25, 29];
// var first = numbers.find(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log(first);

//  Array.findIndex() : the findIndex() methoud return the index of the first array element that passes a test function
var numbers = [4, 5, 7, 9, 25, 29];
var first = numbers.findIndex(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}
console.log(first);

//Exponentiation operator: the exponention operator (**) raise the first operand to power of second operand

// var x = 5;
// var z = x ** 2; //result is 25

// x ** y produces the same result as Math.pow(x,y)
var x = 5;
var z = Math.pow(x, 2);
console.log(z);

//New  Number Methouds :1) Number.isIngeger() 2) Number.isSafeInteger()
// The Number.isInteger() Method:  The Number.isInterger() methoud return true if the argument ia an integer

Number.isInteger(10); //return true
Number.isInteger(10.7); //return false

//The Number.isSafeInteger() Methoud: a safe integer ia an integer that can be exactly reprented as a double precision number
Number.isSafeInteger(10); //return true
Number.isSafeInteger(1234567890); //return false
