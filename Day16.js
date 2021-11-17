const product = [
  { name: "redmi", prices: [5000, 7000] },
  { name: "vivo", prices: [8000, 9000] },
];
const allPrices = product.map((product) => product.prices);
const alldata = product.map((product) => product.name);
console.log(allPrices);
console.log(alldata);
