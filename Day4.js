const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);

const letters = ["a", "b", "c"];
const alphaNumeric = letters.concat(1, [2, 3, 4]);

console.log(alphaNumeric);
//result in ['a','b','c',1,2,3]
