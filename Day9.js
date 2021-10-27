let age = 10;
switch (age) {
  case 18:
    console.log("Won't work"); // the result of prompt is a string, not a number
    break;
  case "18":
    console.log("This works!");
    break;
  default:
    console.log("Any value not equal to one above");
}
