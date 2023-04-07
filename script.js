const add = (a, b) => {
  const addTotal = a + b;
  return addTotal;
};

const subtract = (a, b) => {
  const subtractTotal = a - b;
  return subtractTotal;
};

const multiply = (a, b) => {
  const multiplyTotal = a * b;
  return multiplyTotal;
};

const divide = (a, b) => {
  const divideTotal = a / b;
  return divideTotal;
};

let firstNumber;
let secondNumber;
let operator;

const operate = (a, b, op) => {
  if (a && b) {
    switch (op) {
      case '+':
        return add(a, b);
      case '-':
        return subtract(a, b);
      case 'x':
        return multiply(a, b);
      case '÷':
        return divide(a, b);
    }
  }
};
