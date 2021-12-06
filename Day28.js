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

//find missing no. in array
function missingArray(arr) {
  var x = 0;
  for (let i = 0; i < arr.length; i++) {
    x = x + 1;
    if (arr[i] != x) {
      console.log(x);
    }
  }
}
missingArray([1, 3, 4, 5, 6, 8, 9]);

//Sorting of an string/character
function sorting(arr) {
  return arr.sort();
}
console.log(sorting(["d", "o", "g"])); //[ 'd', 'o', 'g' ]

//sorting of an number
function sorting(arr) {
  return arr.sort((a, b) => {
    return a - b;
  });
}
console.log(sorting([1, 23, 34, 2, 76, 78])); //[ 1, 2, 23, 34, 76, 78 ]
