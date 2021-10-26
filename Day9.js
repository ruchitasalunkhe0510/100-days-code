let age = 10;
switch (age) {
  case 18:
    console.log("Won't work");
    break;
  case "18":
    console.log("This works!");
    break;
  default:
    console.log("Any value not equal to one above");
}
