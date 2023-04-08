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
let calculated = false;

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
    if (!calculated) {
      calcDisplay.innerText += btn;
    }
    if (calculated) {
      clearDisplay();
      calculated = false;
      calcDisplay.innerText += btn;
    }
  }

  if (operators.includes(btn)) {
    firstNum = parseFloat(calcDisplay.innerText);
    operator = btn;
    opDisplay.innerText = btn;
    calcDisplayTwo.innerText = parseFloat(calcDisplay.innerText);
    calcDisplay.innerText = '';
  }

  if (btn === '=') {
    secondNum = parseFloat(calcDisplay.innerText);
    clearDisplay();
    result = operate(firstNum, secondNum, operator);
    calcDisplay.innerText = result;
    firstNum = result;
    secondNum = 0;
  }

  if (btn === 'C') {
    clearDisplay();
    calculated = false;
    firstNum = 0;
    secondNum = 0;
    operator = '';
    result = 0;
  }
}

// main calculator function that uses operate function
