//"this" in methods
let user = {
  name: "rucha",
  age: 21,

  sayHi() {
    alert(this.name); //this is current object
  },
};
user.sayHi(); //rucha

function sayHi() {
  alert(this);
}

sayHi(); // undefined

let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  },
};

user.sayHi(); // Ilya
