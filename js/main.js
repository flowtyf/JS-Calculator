import { operate } from './modules/operations.js';

//Functions for display population
const calcDisplay = document.getElementById('calc-display');
const calcDisplayTwo = document.getElementById('calc-display-two');
const opDisplay = document.getElementById('operator-display');

//Get all buttons and append event listener that returns button inner HTML
const getAllButtons = document.getElementsByClassName('calc-btn');
const allButtons = Array.from(getAllButtons);
allButtons.forEach((button) =>
  button.addEventListener('click', () => {
    let buttonValue = button.innerHTML;
    updateDisplay(buttonValue);
  })
);

//Initialize variables to store numbers and operator for operate function
let firstNum = 0;
let secondNum = 0;
let operator = '';
let result = 0;
let firstOp = false;

//Display current number and operator
//TODO: allow 1 number to equal whatever was input instead of undefined
//TODO: convert btn if statements to switch for readability
function updateDisplay(btn) {
  const operators = ['+', '-', 'x', '÷'];
  function clearDisplay() {
    calcDisplay.innerText = '';
    calcDisplayTwo.innerText = '';
    opDisplay.innerText = '';
  }

  if (btn <= 9) {
    calcDisplay.innerText += btn;
  }

  if (operators.includes(btn)) {
    if (firstOp === false) {
      firstOp = true;
      firstNum = parseFloat(calcDisplay.innerText);
      operator = btn;
      opDisplay.innerText = btn;
      calcDisplayTwo.innerText = parseFloat(calcDisplay.innerText);
      calcDisplay.innerText = '';
    } else if (firstOp === true) {
      secondNum = parseFloat(calcDisplay.innerText);
      result = operate(firstNum, secondNum, operator);
      operator = btn;
      firstNum = result;
      opDisplay.innerText = btn;
      calcDisplayTwo.innerText = result;
      calcDisplay.innerText = '';
    }
  }

  if (btn === '=') {
    if (result === undefined && operator === '÷') {
      calcDisplay.innerText =
        'What if I told you that, despite what you may have learned in school, you can divide by zero if you just think of it in the right way? And what if the answer you get not only had real-world significance, but could actually explain why other parts of math work the way they do? If you’re not afraid to question what you’ve been told, and you’re willing to be flexible with math, then read onward to discover…';
    } else secondNum = parseFloat(calcDisplay.innerText);
    clearDisplay();
    firstOp = false;
    result = operate(firstNum, secondNum, operator);
    firstNum = result;
    calcDisplay.innerText = result;
  }

  if (btn === 'C') {
    clearDisplay();
    firstOp = false;
    firstNum = 0;
    secondNum = 0;
    operator = '';
    result = 0;
  }

  if (btn === '⬅') {
    let trim = calcDisplay.innerText.slice(0, -1);
    calcDisplay.innerText = trim;
  }
}

// main calculator function that uses operate function
