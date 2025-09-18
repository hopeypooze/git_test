let sum = 17;
let operator = "+";
let operand2 = 3;
let currentDigit = 5;

function buildString(sum, operator, operand2) {
  let myString = sum;
  if (operator != null) {
    myString += " " + operator;
  }
  if (operand2 != null) {
    myString += " " + operand2;
  }

  console.log(myString);
}
buildString(sum, operator, operand2);
