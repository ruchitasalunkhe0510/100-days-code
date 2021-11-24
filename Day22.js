//Closures : inner function  can access to outer function variable

// function parent() {
//   var house = "Greencolor";
//   function child() {
//     var house = "yellowcolor";
//     var car = "tesla";
//     console.log("I have:", house, car);
//   }
//   return child;
// }
// var legency = parent();
// console.log(typeof legency);
// legency();
//in course of excutation parent function pass scope chain to child function as legency , and child function can acess preserved legency variable.

//this keyword : The javaScript this keyword refers to object it belong to.
//  It has different value depending on where it is used.
//1) Alone, this refers to the global object:
console.log(this); //window

// 2) In regular function, this refers to the global object
function sum() {
  var add = 2 + 2;
  console.log("sum of num:" + add); //4
  console.log(this); //window
}
sum();

//3) in a methoud , this refers to global object
var student = {
  name: "ruhi",
  qaulification: "B.E",
  greeky: function () {
    var add = 2 + 2;
    console.log("sum of num:" + add); //4
    console.log(this); //window
  },
};
student.greeky();

//4) in a function , in strict mode, this is undefined
