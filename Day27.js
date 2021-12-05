//To find longest common string from array of strings
function longestString() {
  array = ["go", "google", "gosh"];
  var arr = array.sort();
  var i = 0;
  while (
    arr[i].length > 0 &&
    arr[0].charAt[i] === arr[arr.length - 1].charAt(i)
  ) {
    i++;
  }
  console.log(arr[0].substring(0, i));
  return arr[0].substring(0, i);
}
longestString();

//to find vowels in string
function findVowels() {
  vowels = ["a", "e", "i", "o", "u"];
  var str = "priya";
  for (var letter of str.toLowerCase())
    if (vowels.includes(letter)) {
      console.log(letter);
    }
}
findVowels();

//to find first pair whose sum is zero
function getSum() {
  var array = [-3, -2, -1, 0, 1, 2, 3];
  for (let number of array) {
    for (let i = 0; i < array.length; i++) {
      if (number + array[i] === 0) {
        console.log(number, array[i]);
      }
    }
  }
}
getSum();

//To find a first pair whose sum is zero using indexing
function indexFind() {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[rigth]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
const result = indexFind([-3, -2, -1, 0, 1, 2, 3]);
console.log(result);

//return lagest number in array
function largestOfFour(arr) {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    result[i] = largestNumber;
  }
  return result;
}
largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (var j = i + 1; j < nums.length; j++)
      if (nums[i] + nums[j] === target) return [i, j];
    return new let[2]();
  }
};
