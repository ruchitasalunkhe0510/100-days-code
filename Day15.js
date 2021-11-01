//symbol type
let id = Symbol("id");
alert(id); //typeError: cannot convert a symbol value to a string

let id = Symbol("id");
alert(id.toString()); //symbol(id), now it works

let id = Symbol("id");
alert(id.description); //id

let user = {
  name: "John",
};

let id = Symbol("id");
user[id] = 1;
alert(user[id]); //we can access the data using the symbol as a key

let id = Symbol("id");
let user = {
  [id]: 123,
};
let clone = Object.assign({}, user);
alert(clone[id]); //123
