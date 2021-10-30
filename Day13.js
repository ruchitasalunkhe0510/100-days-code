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

//deep cloning
let user = {
  name: "anil",
  sizes: {
    height: 182,
    width: 50,
  },
};
let clone = Object.assign({}, user);
alert(user.sizes); //true, same object
//user and clone share sizes
user.sizes.width++; //change a properth from one place
alert(clone.sizes, width); //51

//calulator
let calculator = {
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
  read() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  },
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
