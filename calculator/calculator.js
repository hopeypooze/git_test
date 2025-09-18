const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
// const digit = document.querySelector('.digit');
const operator = document.querySelector(".operator");
let sum = 0;
let currentDigit = 0;
let currentOperator = null;

let operand1 = null;
let operand2 = null;

const display = document.querySelector(".display");
display.textContent = sum;

function buildString(sum, operator, operand1, operand2, currentDigit) {
  let myString = sum;
  if (operator != null) {
    myString += " " + operator;
  }
  if (operand2 == null && operand1 != null) {
    myString += " " + currentDigit;
  }

  return myString;
}

function add(n1, n2) {
  sum = n1 + n2;
  return sum;
}

function subtract(n1, n2) {
  sum = n1 - n2;
  return sum;
}

digits.forEach((digit) => {
  digit.addEventListener("click", () => {
    currentDigit = Number(digit.textContent);
    sum === 0 && (sum += currentDigit); //if sum is 0, set next digit entered as sum initially.
    // display.textContent = sum;
    display.textContent = buildString(
      sum,
      currentOperator,
      operand1,
      operand2,
      currentDigit
    );
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    currentOperator = operator.textContent;

    display.textContent = buildString(
      sum,
      currentOperator,
      operand1,
      operand2,
      currentDigit
    );
    console.log(
      buildString(sum, currentOperator, operand1, operand2, currentDigit)
    );
    // display.textContent = sum;
    if (operand1 === null) {
      operand1 = currentDigit;
    } else if (operand2 === null) {
      operand2 = currentDigit;
    }

    // console.log(`op1 ${operand1} op2 ${operand2} ${sum}`);

    switch (currentOperator) {
      case "+":
        sum = add(operand1, operand2);

        operand1 = sum;
        operand2 = null;

        display.textContent = sum;
        console.log(`op1 ${operand1} op2 ${operand2} ${sum}`);

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
  });
});
