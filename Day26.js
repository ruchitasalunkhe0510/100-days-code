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
console.log(reverse()); //yrtnuoc ym si aidnI
