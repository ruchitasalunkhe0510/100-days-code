//block scope
function foo() {
  if (true) {
    var fruit1 = "apple";
    const fruit2 = "bannana";
    let fruit3 = "cherry";
  }
  //   console.log(fruit1); //apple

  //   console.log(fruit2); // fruit2 is not defined
  //   console.log(fruit3); //  fruit3 is not defined
}
foo();

//lexical scope
function foo1() {
  var fruit1 = "apple";
  const fruit2 = "bannana";
  let fruit3 = "cherry";
  function foo2() {
    console.log(fruit1); //apple

    console.log(fruit2); // bannana
    console.log(fruit3); //  cherry
  }
  foo2();
}
foo1();
