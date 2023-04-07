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

export function operate(a, b, operator) {
  if (a && b) {
    switch (operator) {
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
