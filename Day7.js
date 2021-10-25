//Logical Operators
//There are four logical operators: ||(OR), &&(AND), !(NOT),??(Nullish Coalescing)

result = a || b;

alert( true || true);  //true
alert( false || true);  //true
alert( true || false);  //true
alert( false || false);  //false

let hour = 9;
if (hour < 10 || hour > 18) {
    alert( 'The office is closed' );
}

//&&(AND)
result = a && b;

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}


//!(NOT)
alert( !true ); // false
alert( !0 ); // true

//Nullish coalescing operator '??'
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder


let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000