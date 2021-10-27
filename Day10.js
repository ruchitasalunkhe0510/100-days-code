// let user = {
//   //an object
//   name: "John", //by key "name" store value "John"
//   age: 30, //by key "age"  store value 30
// };
// console.log(user.name);
// //console.log(user.age);

// //to remove a property we can use delete operator
// console.log(delete user.age);

// let user = {};
// //set
// user["likes birds"] = true;

// //get
// alert(user["likes birds"]); //true

// //delete
// delete user["likes birds"];

// let key = "likes birds";
// //same as user["likes birds"] = true;
// //user[key] = true;

// //Computed properties: we can use square braket in object

// let fruit = prompt("Which fruit to buy?", "apple");
// let bag = {
//   [fruit]: 5, //the name of property is taken variable fruit
// };

// alert(bag.apple);

// //property value shorthand

// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
//   };
// }

// let user = makeUser("rucha", 21);
// console.log(user.name);
// alert(user.age);

let user = {
  name: "rucha",
  surname: "salunkhe",
};
user.age = 25; //add one more
