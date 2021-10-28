//"this" in methods
let user = {
  name: "rucha",
  age: 21,

  sayHi() {
    alert(this.name); //this is current object
  },
};
user.sayHi(); //rucha
