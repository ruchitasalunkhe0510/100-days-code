//remove duplicate char from string
// function removeDuplicate() {
//   // var string = "Rucha prachi ruchita";
//   var string = "priya riya supriya";
//   let result = string
//     .split("")
//     .filter((item, index, arr) => {
//       return arr.indexOf(item) == index;
//     })
//     .join("");
//   return result;
// }
// console.log(removeDuplicate());

//code 2: Remove Duplicate characters from array of element and find the count of an elements using set object
// var arr = [55, 44, 55, 67, 67, 67, 67, 8, 8, 8, 8, 8, 65, 1, 2, 3, 3, 34, 5];
// var unique = [...new Set(arr)];
// console.log(unique); //[55, 44, 67,  8, 65,1,  2,  3, 34,5]
// console.log(unique.length); //10

//code 3:Remove Duplicate characters from array of element using filter
// var myArray = ["a", 1, "a", 2, "1"];
// var unique = myArray.filter(
//   (value, index, arr) => arr.indexOf(value) === index
// );
// console.log(unique);

//Code 4:String reverse without reversing of individual words (Array of elements can be reverse with reverse() method but for string it is won't possible so required to split
//and then join().
// function removeDuplicate() {
//   var string = "India is my country";
//   var result = string.split("").reverse("").join("").split(' ').reverse().join(' ');

//   return result;
// }
// console.log(removeDuplicate());  //"aidnI si ym yrtnuoc"

//Code 5:String reverse with reversing of individual words
// function withoutReverse() {
//   var string = "India is my country";
//   var result = string.split("").reverse().join("");
//   return result;
// }
// console.log(withoutReverse()); //yrtnuoc ym si aidnI

//Code 6:String reverse without using inbult function
function reverse() {
  var string = "India is my country";
  var result = "";
  for (var i = string.length - 1; i >= 0; i--) {
    result = result + string[i];
  }
  return result;
}
console.log(reverse()); //yrtnuoc ym si

//Code 7: Find factorial of user input number
// const number = parseInt(prompt("Enter a positive no:"));
// if (number < 0) {
//   console.log("Error");
// } else if (number === 0) {
//   console.log(`the factorial is 1`);
// } else {
//   let fact = 1;
//   for (var i = 1; i <= number; i++) {
//     fact *= i;
//   }
//   console.log(`the factrial is ${fact}`);
// }

function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
console.log(factorial(5));

//Swapping of 2 number with third number
let a = 12;
let b = 20;
let c;
c = a;
a = b;
b = c;
console.log(a, b, c);

//Code 11: To check the string or number is palindrome or not( ex: 121,madam,anna) using reverse method
function checkPalindrome() {
  var string = "annauii";
  var result = string.split("").reverse().join("");
  if (string == result) {
    console.log("Palindrome");
  } else {
    console.log("Not Palindrome");
  }
}
checkPalindrome();

//Code 13: To find longest word from a string using (for of) /*for(var i=0; i>=num; i++) means iterate by indexing*/  /*for (var word of words) means iterate by an elements not
// by indexing*/
function longestWord() {
  let string = "supriya is a masooooom good girl";
  var words = string.split("");
  var longest = "";
  for (var word of words) {
    console.log(word);
    if (word.length > longest.length) {
      longest = word;
    }
    return longest.length;
  }
}
longestWord();

//Code 15: To find longest word from a string using custom code

function longest() {
  var str = "Priya is a good girl and having hardworking skills";
  var words = str.split("");
  var longest = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  console.log(longest);
  return longest;
}
longest();
