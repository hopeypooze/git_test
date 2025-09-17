const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
// const digit = document.querySelector('.digit'); 
const operator = document.querySelector('.operator'); 
const display = document.querySelector('.display');

document.querySelector('.display').textContent = 12; //set value 
console.log(document.querySelector('.display').textContent);

digits.forEach((digit) => {
  digit.addEventListener("click", () => {
    console.log(`You clicked: ${digit.textContent}`);
display.value=digit.textContent;

})})

    operators.forEach((operator) => {
operator.addEventListener("click", () => {
    console.log(`You clicked: ${operator.textContent}`)})})

