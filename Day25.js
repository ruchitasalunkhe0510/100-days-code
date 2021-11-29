//upperCase string
// let str = "rucha";
// console.log(str.toUpperCase());

//round value
let n = 1.234689;
console.log(n.toFixed()); //1
console.log(n.toFixed(2)); //1.23

// let num = Number("123");
// console.log(num);

let str = "Hello";
str.test = 5;
console.log(str.test); //undefined

//Hex,binary and octal number
console.log(0xff); //255

//to String(base)
let num = 255;
console.log(num.toString(16)); //ff
console.log(num.toString(2)); //11111111

//base=16 => is used for hex colors, character encoding digit 0..9 or A..F
//base=2 => bitwise operation digit can be 0 or 1.
//base=36 => 0..9 or A..Z

console.log((123456).toString(36)); //2n9c
console.log((12345).toString(16)); //3039
console.log((0).toString(2)); //0
