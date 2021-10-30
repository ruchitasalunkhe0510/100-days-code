// let user = { name: "john" };
// let admin = user;
// admin.name = "pete"; //changed by the 'admin'
// alert(user.name);

// //Cloning and merging

// let user = {
//   name: "John",
//   age: 30,
// };
// let clone = {}; //the new empty object

// //let copy all user properties into it
// for (let key in user) {
//   clone[key] = user[key];
// }
// //now clone is fully independent object with the same content
// clone.name = "pete"; //change the data
// alert(user.name); //print john in the original object

//object.assign

let user = { name: "rahul" };

Object.assign(user, { name: "Pete" });

alert(user.name); //now user={name:"pete"}

let user = {
  name: "rucha",
  age: 21,
};
let clone = Object.assign({}, user); //another methoud of cloning of object

//Nested cloning
let user = {
  name: " John",
  sizes: {
    height: 182,
    width: 50,
  },
};

alert(user.sizes.height); //182
