//Checking all letters of second words should present in first word, in the same order using include function
function characterPresent(arr) {
  var first = arr[0].toLowerCase();
  var second = arr[1].toLowerCase();
  for (var letter of second) {
    if (!first.includes(letter)) {
      return false;
    }
  }
  return true;
}
console.log(characterPresent(["hello", "hey"]));
