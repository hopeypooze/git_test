const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");

const operator = document.querySelector(".operator");

let sum = 0;
let currentDigit = 0;
let currentOperator = "";
let tempDigits = "";

let operand1 = null;
let operand2 = null;
let savedOperator = null;
let displayString = "";

const display = document.querySelector(".display");

display.textContent = sum;

function add(n1, n2) {
  sum = n1 + n2;
  return sum;
}

function subtract(n1, n2) {
  sum = n1 - n2;
  return sum;
}

function displayText(input) {
  displayString += input;
  return displayString;
}

function doOperation(operand1, savedOperator, operand2) {
  switch (savedOperator) {
    case "+":
      sum = add(operand1, operand2);

      break;
    case "-":
      sum = subtract(operand1, operand2);

      operand1 = sum;
      operand2 = null;

      display.textContent = sum;
      break;
    case "*":
      console.log(`You clicked: ${operator.textContent}`);
      break;
    case "/":
      console.log(`You clicked: ${operator.textContent}`);
      break;
    case "=":
      console.log(`You clicked: ${operator.textContent}`);
      break;
    case "CE":
      console.log(`You clicked: ${operator.textContent}`);
      break;

    default:
  }
  return sum;
}

digits.forEach((digit) => {
  digit.addEventListener("click", () => {
    currentDigit = Number(digit.textContent);
    console.log("you clicked", currentDigit);
    display.textContent = displayText(currentDigit);
    tempDigits += String(currentDigit);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    currentOperator = operator.textContent;

    console.log("you clicked", currentOperator);

    if (operand1 == null) {
      operand1 = Number(tempDigits);
      tempDigits = "";
      if (sum === 0) {
        display.textContent = operand1;
      }
    } else {
      operand2 = Number(tempDigits);
      tempDigits = "";
      console.log(operand1);
      console.log(operand2);
    }
    if (currentOperator != "") {
      savedOperator = currentOperator;
      displayText(savedOperator);
      display.textContent = displayString;
      console.log(
        `op1 ${operand1} op2 ${operand2} displaytext: ${displayString} currentop: ${currentOperator} savedop: ${savedOperator}` //why is displaySTring correct here but not in the actual display?
      );
    }
    if (operand1 != null && operand2 != null) {
      sum = doOperation(operand1, savedOperator, operand2);
      displayString = sum;
      display.textContent = displayString;

      operand1 = sum;
      operand2 = null;

      savedOperator = "";
      console.log(
        `op1 ${operand1} op2 ${operand2} displaytext: ${displayString} currentop: ${currentOperator} savedop: ${savedOperator}`
      );
    }
  });
});
