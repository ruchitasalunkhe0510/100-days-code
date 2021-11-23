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

class Car {
  constructor(brand) {
    this.carname = brand;
  }
}
mycar = new car("Ford");
