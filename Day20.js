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
