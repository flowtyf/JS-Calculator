function add(a, b) {
  const addTotal = a + b;
  return addTotal;
}

function subtract(a, b) {
  const subtractTotal = a - b;
  return subtractTotal;
}

function multiply(a, b) {
  const multiplyTotal = a * b;
  return multiplyTotal;
}

function divide(a, b) {
  const divideTotal = a / b;
  if (b === 0) {
    return 'What if I told you that, despite what you may have learned in school, you can divide by zero if you just think of it in the right way? And what if the answer you get not only had real-world significance, but could actually explain why other parts of math work the way they do?';
  }
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
