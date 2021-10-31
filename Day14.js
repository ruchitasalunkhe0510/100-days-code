// function User(name) {
//   this.name = name;
//   this.age = age;
//   this.isAdmin = false;
// }
// let user = new User("rucha");
// let user = new User(23);

// console.log(user.name);
// console.log(user.age);
// console.log(user.isAdmin);

// //use new keyword
// function User(name) {
//   if (!new.target) {
//     //if you run me without new
//     return new User(name); //
//   }
//   this.name = name;
// }

// let john = User("john"); //redirects call to new USER
// alert(john.name);

// //return from constructors

// function BigUser() {
//   this.name = "John";
//   return { name: "Gudii" }; //return this object
// }

// alert(new BigUser().name); //Gudii, got that object

// function SmallUser() {
//   this.name = "John";
//   return; //return this
// }

// alert(new SmallUser().name); //John

// //methoud in constructor

// function User(name) {
//   this.name = name;

//   this.sayHi = function () {
//     alert("My name is: " + this.name);
//   };
// }

// let john = new User("John");

// john.sayHi(); //My name is: John

let user = null;
let x = 0;

user?.sayHi(x++);
console.log(x); // 0, value not incremented

//other variants: ?.(), ?.[]

let userAdmin = {
  admin() {
    alert("I am admin");
  },
};

let userGuest = {};

userAdmin.admin?.(); //I am admin

userGuest.admin?.(); //nothing

let key = "firstName";

let user1 = {
  firstName: "John",
};

let user2 = null;

alert(user1?.[key]); //john
alert(user2?.[key]); //undefined

delete user?.name; //delete user.name
