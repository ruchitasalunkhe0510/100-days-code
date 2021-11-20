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
