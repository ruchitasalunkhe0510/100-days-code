//Prototype  in javaScript

var Mobile = function (model_no) {
  //Instance Member
  this.model = model_no;
  this.price = 3000;
};
var redmi = new Mobile("Redmi5");
var nokia = new Mobile("3310");
//classname.prototype.key = 'value';
//prototype member =7875816954
Mobile.prototype.color = "white";
console.log(redmi);
