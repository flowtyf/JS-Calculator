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
    calcNumber.id = `${i}-button`;
    calcNumber.classList.add('calc-button');
    calcNumber.innerHTML = `${i}`;
    calcButtonContainer.appendChild(calcNumber);
  }
};
appendNumbers();

//Operators and equals buttons

const addButton = document.createElement('button');
addButton.id = 'add-button';
addButton.classList.add('calc-button');
addButton.innerHTML = '+';
calcButtonContainer.appendChild(addButton);

const subButton = document.createElement('button');
subButton.id = 'sub-button';
subButton.classList.add('calc-button');
subButton.innerHTML = '-';
calcButtonContainer.appendChild(subButton);

const multButton = document.createElement('button');
multButton.id = 'mult-button';
multButton.classList.add('calc-button');
multButton.innerHTML = 'x';
calcButtonContainer.appendChild(multButton);

const divButton = document.createElement('button');
divButton.id = 'div-button';
divButton.classList.add('calc-button');
divButton.innerHTML = '÷';
calcButtonContainer.appendChild(divButton);
