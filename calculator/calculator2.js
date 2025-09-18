
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
  console.log('subtract()', n1, n1, sum);
  return sum;
 
}

function multiply(n1, n2) {
  sum = n1 * n2;
  return sum;
}

function divide(n1, n2){
  sum= n1 / n2;
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
      sum = multiply(operand1, operand2);

      operand1 = sum;
      operand2 = null;

      display.textContent = sum;
      break;
    case "/":
       sum = divide(operand1, operand2);

      operand1 = sum;
      operand2 = null;

      display.textContent = sum;
      break;
    case "=":
      display.textContent = sum;
      break;
    case "CE":
      sum=0;
      displayString="";
      display.textContent=sum;
      operand1 = null;
      operand2 = null;
      tempDigits = "";
      currentOperator="";
      savedOperator = "";
      break;

    default:
  }
  return sum;
}

digits.forEach((digit) => {
  digit.addEventListener("click", () => {
    currentDigit = Number(digit.textContent);
    console.log("foreach digit you clicked", currentDigit);
    display.textContent = displayText(currentDigit);
    tempDigits += String(currentDigit);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {

  
    currentOperator = operator.textContent;
  if (currentOperator != 'CE'){
        console.log("NOT CE");
   

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
   
    if (operand1 != null && operand2 != null) {
      sum = doOperation(operand1, savedOperator, operand2);
      displayString = sum;
      display.textContent = displayString;

      operand1 = sum;
      operand2 = null;
      tempDigits = "";

      savedOperator = "";
      console.log(
        `op1 ${operand1} op2 ${operand2} displaytext: ${displayString} currentop: ${currentOperator} savedop: ${savedOperator}`
      );
    }

     if (currentOperator != "" && currentOperator != 'CE') {
      savedOperator = currentOperator;
      if(savedOperator != '=' && savedOperator !='CE')
     { display.textContent = displayText(savedOperator);
      console.log(
        `op1 ${operand1} op2 ${operand2} displaytext: ${displayString} currentop: ${currentOperator} savedop: ${savedOperator}` //why is displaySTring correct here but not in the actual display?
      );}
    }
  }//if it's CE
else {
  console.log("CE");
  
  
  sum=0;
      displayString="";
      display.textContent=sum;
      operand1 = null;
      operand2 = null;
      tempDigits = "";
      currentOperator="";
      savedOperator = "";}





});
});

document.addEventListener("keydown", (event) => {
  let key = event.key;

  // Normalize Enter and Backspace
  if (key === "Enter") key = "=";
  if (key === "Backspace") key = "CE";

  const validKeys = ["0","1","2","3","4","5","6","7","8","9","+","-","*","/","=","CE"];

  if (validKeys.includes(key)) {
    const matchingButton = Array.from(document.querySelectorAll(".digit, .operator"))
      .find(btn => btn.textContent === key);

    if (matchingButton) {
      matchingButton.click(); // Simulate the button click
    }
  }
});