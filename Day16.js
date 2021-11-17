//map
const product = [
  { name: "redmi", prices: [5000, 7000] },
  { name: "vivo", prices: [8000, 9000] },
];
const allPrices = product.map((product) => product.prices);
const alldata = product.map((product) => product.name);
console.log(allPrices);
console.log(alldata);

// originalArray.forEach((number, i) => {
//   newArray[i] = number * 5;
// });
// console.log(newArray); //[5,10,20,25]

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(consoleItem);
function consoleItem(item, index, arr) {
  console.log(item);
  console.log("a[" + index + "]= " + item);
}
