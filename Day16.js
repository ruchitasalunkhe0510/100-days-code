//map
// const product = [
//   { name: "redmi", prices: [5000, 7000] },
//   { name: "vivo", prices: [8000, 9000] },
// ];
// const allPrices = product.map((product) => product.prices);
// const alldata = product.map((product) => product.name);
// console.log(allPrices);
// console.log(alldata);

// originalArray.forEach((number, i) => {
//   newArray[i] = number * 5;
// });
// console.log(newArray); //[5,10,20,25]

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(consoleItem);
// function consoleItem(item, index, arr) {
//   console.log(item);
//   console.log("a[" + index + "]= " + item);
// }

//forEach => read every element
// const arr = [5, 7, 9, 1];
// arr.forEach((item) => {
//   console.log(item);
// });

//include => (In array check value is present or not return true or false)
// const arr = ["rucha", "shubu", "rahul", "baba"];
// let checkmethoud = arr.includes("rucha"); //true
// let checkmethoud = arr.includes("sumit"); //false
// console.log(checkmethoud);

//filter Method => this method create new array with only element passes they satified condition
// in provied function
// const arr = [1, 4, 5, 2, 8, 9];
// const arraymethod = arr.filter((num) => num > 4);
// console.log(arraymethod);
// console.log(arr);

//map => this method create new array by calling provied function in every element.(store some data and wrtten same data in method)
const arr = [1, 3, 5, 6, 8, 9];
const oneadd = arr.map((num) => num + 1);
console.log(oneadd);
console.log(arr);
