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

//To find the largest pair of the 2 elements using indexing with sorted elements
function largestPairSumOfTwo(num) {
  return num[num.length - 1] + num[num.length - 2];
}
const result = largestPairSumOfTwo([1, 2, 3, 5, 4, 2, 9, 7]);
console.log(result); //9+7=16

// Uppercase of each first letter of a words
function upperCaseFirst() {
  var str = "India is my country";
  var words = str.toLowerCase().split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
console.log(upperCaseFirst());
