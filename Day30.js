//To find longest word from a string using functions
function longestWord() {
  var str = "hi I am priya and priya is good girl he is hardworking person";
  var arr = str.split(" ").sort((a, b) => {
    return b.length - a.length;
  });
  console.log(arr[0]); //hardworking
  console.log(arr[0].length); //11
}
longestWord();
