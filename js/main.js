import { operate } from './modules/operations.js';

//Calculator body
const calcContainer = document.createElement('div');
calcContainer.id = 'calc-container';
document.body.appendChild(calcContainer);

//Calculator Display

const displayContainer = document.createElement('div');
displayContainer.id = 'display-container';
calcContainer.appendChild(displayContainer);

const calcDisplayTwo = document.createElement('div');
calcDisplayTwo.id = 'calc-display-two';
displayContainer.appendChild(calcDisplayTwo);

const opDisplay = document.createElement('div');
opDisplay.id = 'operator-display';
displayContainer.appendChild(opDisplay);

const calcDisplay = document.createElement('div');
calcDisplay.id = 'calc-display';
displayContainer.appendChild(calcDisplay);

//Calculator Buttons Container
const calcButtonContainer = document.createElement('div');
calcButtonContainer.id = 'button-container';
calcContainer.appendChild(calcButtonContainer);

//Calculator Numbers
const appendNumbers = () => {
  for (let i = 1; i <= 9; i++) {
    const calcNumber = document.createElement('button');
    calcNumber.id = `${i}-btn`;
    calcNumber.classList.add('calc-btn');
    calcNumber.innerHTML = `${i}`;
    calcButtonContainer.appendChild(calcNumber);
  }
  const calcNumber0 = document.createElement('button');
  calcNumber0.id = `0-btn`;
  calcNumber0.classList.add('calc-btn');
  calcNumber0.innerHTML = 0;
  calcButtonContainer.appendChild(calcNumber0);
};
appendNumbers();

//Operators and equals buttons
//TODO - use a loop to create these buttons with less code

const addBtn = document.createElement('button');
addBtn.id = 'add-btn';
addBtn.classList.add('calc-btn');
addBtn.innerHTML = '+';
calcButtonContainer.appendChild(addBtn);

const subBtn = document.createElement('button');
subBtn.id = 'sub-btn';
subBtn.classList.add('calc-btn');
subBtn.innerHTML = '-';
calcButtonContainer.appendChild(subBtn);

const multBtn = document.createElement('button');
multBtn.id = 'mult-btn';
multBtn.classList.add('calc-btn');
multBtn.innerHTML = 'x';
calcButtonContainer.appendChild(multBtn);

const divBtn = document.createElement('button');
divBtn.id = 'div-btn';
divBtn.classList.add('calc-btn');
divBtn.innerHTML = '÷';
calcButtonContainer.appendChild(divBtn);

const equBtn = document.createElement('button');
equBtn.id = 'equ-btn';
equBtn.classList.add('calc-btn');
equBtn.innerHTML = '=';
calcButtonContainer.appendChild(equBtn);

const clearBtn = document.createElement('button');
clearBtn.id = 'clear-btn';
clearBtn.classList.add('calc-btn');
clearBtn.innerHTML = 'C';
calcButtonContainer.appendChild(clearBtn);

//Functions for display population
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
let calculated = false;
//Display current number and operator
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
    firstNum = parseInt(calcDisplay.innerText);
    operator = btn;
    opDisplay.innerText = btn;
    calcDisplayTwo.innerText = parseInt(calcDisplay.innerText);
    console.log(calcDisplayTwo.innerText);
    calcDisplay.innerText = '';
  }

  if (btn === '=') {
    secondNum = parseInt(calcDisplay.innerText);
    clearDisplay();
    calcDisplay.innerText = operate(firstNum, secondNum, operator);
    firstNum = 0;
    secondNum = 0;
    calculated = true;
  }

  if (btn === 'C') {
    clearDisplay();
    calculated = false;
    firstNum = 0;
    secondNum = 0;
  }
}

// main calculator function that uses operate function
