let user = { name: "john" };
let admin = user;
admin.name = "pete"; //changed by the 'admin'
alert(user.name);

let user = {
  name: "John",
  age: 30,
};
let clone = {}; //the new empty object

//let copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}
//now clone is fully independent object with the same content
clone.name = "pete"; //change the data
alert(user.name); //print john in the original object
