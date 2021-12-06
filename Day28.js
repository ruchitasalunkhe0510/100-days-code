//To find the index of an element from an array
const letter = ["a", "b", "c", "d"];
const index = letter.indexOf("d");
console.log(index);

//Fibonacci Series (0,1,1,2,3,5,8,13....)
// function fibonacciSeries() {
//   const number = parseInt(prompt("Enter the number of terms: "));
//   let n1 = 0,
//     n2 = 1,
//     nextTerm;
//   for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
//   }
// }
// fibonacciSeries();

// Fibonacci Series (0,1,1,2,3,5,8,13....) where keeping in array
function listFabonicci(n) {
  var arr = [0, 1];
  for (let i = 1; i < n; i++) {
    arr.push(arr[i] + arr[i - 1]);
    return arr;
  }
}
console.log(listFabonicci(5));

//Finding a missing elements in an array and then add with existing elements. (-1 means if elements not found then it will return always -1 as per rule)
function missingElement() {
  var a = [1, 2, 3, 5];
  var missing = [];
  for (var i = 1; i <= 6; i++) {
    if (a.indexOf(i) == -1) {
      missing.push(i);
    }
  }
  console.log(missing);
  console.log(a.concat(missing).sort());
}
missingElement();
