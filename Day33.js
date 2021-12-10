// Print string n times using inbuilt function
function repeatStringNumTime(str, num) {
  if (num < 1) return "";
  return str.repeat(num);
}
console.log(repeatStringNumTime("rucha", 5)); //rucharucharucharucharucha
