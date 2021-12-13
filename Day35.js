//To find only truthy values
function removeFalseValue(arr) {
  var thruely = [];
  for (var item of arr) {
    if (item) {
      thruely.push(item);
    }
  }
  return thruely;
}
console.log(removeFalseValue(["rucha", 6, 0, "", false, undefined, "ate"])); //[ 'rucha', 6, 'ate' ]
