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
console.log(removeFalseValue(["rucha", 6, 0, 1, "", false, undefined, "ate"])); //[ 'rucha', 6, 'ate' ]

//To find only truthy values using filter
function removeValue(arr) {
  return arr.filter((item) => {
    return item;
  });
}
console.log(removeValue(["ruchita", 0, 23, undefined, NaN, "hi"])); //[ 'ruchita', 23, 'hi' ]
