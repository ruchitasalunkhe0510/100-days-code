//Closures : inner function  can access to outer function variable

function parent() {
  var house = "Greencolor";
  function child() {
    var house = "yellowcolor";
    var car = "tesla";
    console.log("I have:", house, car);
  }
  return child;
}
var legency = parent();
console.log(typeof legency);
legency();
