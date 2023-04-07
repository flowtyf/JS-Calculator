export function add(a, b) {
  const addTotal = a + b;
  return addTotal;
}

export function subtract(a, b) {
  const subtractTotal = a - b;
  return subtractTotal;
}

export function multiply(a, b) {
  const multiplyTotal = a * b;
  return multiplyTotal;
}

export function divide(a, b) {
  const divideTotal = a / b;
  return divideTotal;
}

let firstNumber;
let secondNumber;
let operator;

export function operate(a, b, op) {
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
}
