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
