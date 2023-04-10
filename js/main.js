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

//Sounds
const uiSound = document.getElementById('ui-click');
const uiBeep = document.getElementById('equals-click');
uiBeep.volume = 0.5;
const uiClear = document.getElementById('clear-sound');

//Initialize variables to store numbers and operator for operate function
let firstNum = undefined;
let secondNum = undefined;
let operator = '';
let result = 0;
//checks for first operator input, multiple number functionality
let firstOp = false;
//Display current number and operator
//TODO: convert btn if statements to switch for readability
function updateDisplay(btn) {
  const operators = ['+', '-', 'x', '÷'];

  function clearDisplay() {
    calcDisplay.innerText = '';
    calcDisplayTwo.innerText = '';
    opDisplay.innerText = '';
  }

  function clearCalc() {
    clearDisplay();
    firstOp = false;
    firstNum = undefined;
    secondNum = undefined;
    operator = '';
    result = 0;
  }

  if (btn <= 9) {
    calcDisplay.innerText += btn;
    uiSound.currentTime = 0;
    uiSound.play();
  }

  if (calcDisplay.innerText !== '') {
    if (operators.includes(btn)) {
      if (firstOp === false) {
        uiSound.currentTime = 0;
        uiSound.play();
        firstOp = true;
        firstNum = parseFloat(calcDisplay.innerText);
        operator = btn;
        opDisplay.innerText = btn;
        calcDisplayTwo.innerText = parseFloat(calcDisplay.innerText);
        calcDisplay.innerText = '';
      } else if (firstOp === true) {
        uiBeep.currentTime = 0;
        uiBeep.play();
        secondNum = parseFloat(calcDisplay.innerText);
        result = operate(firstNum, secondNum, operator);
        operator = btn;
        firstNum = result;
        opDisplay.innerText = btn;
        calcDisplayTwo.innerText = result;
        calcDisplay.innerText = '';
      }
    }

    if (btn === '=' && calcDisplayTwo.innerText !== '') {
      uiBeep.play();
      secondNum = parseFloat(calcDisplay.innerText);
      clearDisplay();
      firstOp = false;
      result = operate(firstNum, secondNum, operator);
      firstNum = result;
      calcDisplay.innerText = result;
    }
  }

  if (btn === 'C') {
    uiClear.currentTime = 0;
    uiClear.play();
    clearCalc();
  }

  if (btn === '⬅') {
    uiClear.currentTime = 0;
    uiClear.play();
    let trim = calcDisplay.innerText.slice(0, -1);
    calcDisplay.innerText = trim;
  }
}

// UI sounds
