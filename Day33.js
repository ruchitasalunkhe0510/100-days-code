// Print string n times using inbuilt function
function repeatStringNumTime(str, num) {
  if (num < 1) return "";
  return str.repeat(num);
}
console.log(repeatStringNumTime("rucha", 5)); //rucharucharucharucharucha

// Print string n times in custom way
function repeateString(str, num) {
  var final = "";
  if (num < 0) return "";
  for (var i = 0; i < num; i++) {
    final = final + str;
  }
  return final;
}
console.log(repeateString("priya", 3)); //priyapriyapriya
