//Converting one dimensional array into n dimensional array using slice

function arrayInGroup(arr, size) {
  var group = [];
  while (arr.length > 0) {
    group.push(arr.slice(0, size));
    arr = arr.slice(size);
  }
  return group;
}
console.log(arrayInGroup(["a", "f", "e", "e"], 3)); //[ [ 'a', 'f', 'e' ], [ 'e' ] ]
