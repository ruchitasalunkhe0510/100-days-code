//remove duplicate char from string
function removeDuplicate() {
  // var string = "Rucha prachi ruchita";
  var string = "priya riya supriya";
  let result = string
    .split("")
    .filter((item, index, arr) => {
      return arr.indexOf(item) == index;
    })
    .join("");
  return result;
}
console.log(removeDuplicate());
