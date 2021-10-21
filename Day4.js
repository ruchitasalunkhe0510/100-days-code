const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);

const letters = ["a", "b", "c"];
const alphaNumeric = letters.concat(1, [2, 3, 4]);

console.log(alphaNumeric);
result in ["a", "b", "c", 1, 2, 3];

//Array.copyWithin():

const array = ["a", "b", "c", "d", "e"];
console.log(array.copyWithin(0, 3, 4));
//result = ["d", "b", "c", "d", "e"];

// push / pop — add/remove elements from the end of the array
// unshift / shift — add/remove elements from the beginning of the array
// splice — add/remove elements from the specified location of the array
// String.prototype.concat()
// Symbol.isConcatSpreadable – control flattening.

//#Array.prototype.entries()
// => The CustomElementRegistry() method return a new array iterator object that contain the key/value pairs for each index in the array

const array1 = ["a", "b", "c"];
const iterator1 = array1.entries();

console.log(iterator1.next().value);

//#Array.prototype.fill()
//=>the fill() method changes all elements in an array to a static
//value, from a start index(default 0) to an end (default array.length).
//It return the modified array..

const array1 = [1, 2, 3, 4];
console.log(array1.fill(0, 1, 3));
