//symbol type
let id = Symbol("id");
alert(id); //typeError: cannot convert a symbol value to a string

let id = Symbol("id");
alert(id.toString()); //symbol(id), now it works

let id = Symbol("id");
alert(id.description); //id
