//Hoisting => Hoisting is the javaScript interpretats action of moiving all variable and function declaration
//to the top of the current scope.

var name;
console.log(name); //undefined
name = "rucha";

function fun() {
  var name;
  console.log(name); //undefined
  name = "rucha";
}
fun();

function fun() {
  var name = "rucha";
  console.log(name); //rucha
}
fun();

function carDetails() {
  //function declare top of global scope

  var model; //variable declare top of local scope

  model = "Audi"; //variable assign value

  console.log(model); //print Audi
}
carDetails();

//Now, we already know functions and variables declarations are hoisted,
// but the main thing you should know that is functions are hoisted first, and then variables.
