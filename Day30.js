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
