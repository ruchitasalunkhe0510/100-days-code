//function declaration
function sum(a, b) {
  return a + b;
}

//function Expression
let sum = function (a, b) {
  return a + b;
};

let age = prompt("What is your age?", 18);

// conditionally declare a function
let welcome;
if (age < 18) {
  welcome = function () {
    alert("Hello!");
  };
} else {
  welcome = function () {
    alert("Greeting");
  };
}

welcome();

//Arrow function

let sum = (a, b) => a + b;
// this arrow function is a shorter form of:
// let sum = function(a, b) {
//     return a + b;
// };

alert(sum(1, 3)); //3

let double = (n) => n * 2;
// let double = function(n) {
//     return n *2
// }

alert(double(3)); //6

//if there are no arguments, parentheses will be empty (but they should be present)

let sayHi = () => alert("Hello!");
sayHi();

let age = prompt("What is your age?", 18);

let welcome = age < 18 ? () => alert("Hello") : () => alert("Greeting!");
welcome();

//multiline arrow function

let sum = (a, b) => {
  // the curly brace opens a multiline function
  let result = a + b;
  return result;
};

alert(sum(1, 2)); //3
