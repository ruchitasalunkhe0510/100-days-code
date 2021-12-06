// To find unique values from 2 arrays and keep into one array.
function uniqueElement(arr1, arr2) {
  var arr = [...arr1, ...arr2];
  var array = [...new Set(arr)];
  console.log(array);
}
uniqueElement([1, 2, 3, 4, 4, 6, 7], [2, 5, 9, 8]);
