import {
  add,
  subtract,
  multiply,
  divide,
  operate,
} from './modules/operations.js';

//Calculator body
const calcContainer = document.createElement('div');
calcContainer.id = 'calc-container';
document.body.appendChild(calcContainer);

//Calculator Display
const calcDisplay = document.createElement('div');
calcDisplay.id = 'calc-display';
calcContainer.appendChild(calcDisplay);

//Calculator Buttons Container
const calcButtonContainer = document.createElement('div');
calcButtonContainer.id = 'button-container';
calcContainer.appendChild(calcButtonContainer);

//Calculator Numbers
const appendNumbers = () => {
  for (let i = 0; i <= 9; i++) {
    const calcNumber = document.createElement('button');
    calcNumber.id = `${i}-btn`;
    calcNumber.classList.add('calc-btn');
    calcNumber.innerHTML = `${i}`;
    calcButtonContainer.appendChild(calcNumber);
  }
};
appendNumbers();

//Operators and equals buttons

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
let displayValue;
//Get all buttons and append event listener that returns button inner HTML
//TODO - change display value to increase until an operator is pressed
const getAllButtons = document.getElementsByClassName('calc-btn');
const allButtons = Array.from(getAllButtons);
allButtons.forEach((button) =>
  button.addEventListener('click', () => {
    let buttonValue = button.innerHTML;
    updateDisplay(buttonValue);
    return buttonValue;
  })
);

//TODO update Display via the return value of button, add subdisplay for first/second num and operator
function updateDisplay(btn) {
  const operators = ['+', '-', 'x', '÷'];

  if (btn <= 9) {
    calcDisplay.innerText += `${btn}`;
  } else if (operators.includes(btn)) {
    calcDisplay.innerText = '';
  } else if (btn === 'C') {
    calcDisplay.innerText = '';
  }
}
