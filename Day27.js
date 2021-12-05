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
