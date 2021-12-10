//find first duplicated element from an array
function firstDuplicate() {
  let arr = [1, 2, 3, 4, 4];
  let data = [];
  for (var item of arr) {
    if (data[item]) {
      return item;
    } else {
      data[item] = item;
      console.log(data[item]);
    }
  }
  return -1;
}
console.log(firstDuplicate());

//To find the largest elements fro the 2 diensional array
function largestArray(arr) {
  var max = [];
  for (let i = 0; i < arr.length; i++) {
    var tempMax = arr[i][0];
    for (var j = 0; j < arr[i].length; j++) {
      var currElement = arr[i][j];
      if (currElement >= tempMax) {
        tempMax = currElement;
      }
    }
    max.push(tempMax);
  }
  console.log(max);
  return max;
}
largestArray([
  [1, 2, 4, 5],
  [3, 4, 2, 5],
  [9, 7, 3],
]);

//To find the largest elements fro the 2 diensional array in another way
function largestArraydimenstion(arr) {
  var max = [0, 0, 0, 0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] >= max[i]) {
        max[i] = arr[i][j];
      }
    }
  }
  console.log(max);
  return max;
}
largestArraydimenstion([
  [1, 2, 3, 4],
  [5, 6, 7, 9],
  [45, 76, 2, 1],
  [89, 90, 87, 9],
]);
