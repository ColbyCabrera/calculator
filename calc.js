function operate(operand1, operator, operand2) {
    if (operator === "*") {
        return multiply(operand1, operand2);
    } else if (operator === "/") {
        return divide(operand1, operand2);
    } else if (operator === "+") {
        return add(operand1, operand2);
    } else {
        return subtract(operand1, operand2);
    }
}

function add(op1, op2) {
    return op1 + op2;
}

function subtract(op1, op2) {
    return op1 - op2;
}

function multiply(op1, op2) {
    return op1 * op2;
}

function divide(op1, op2) {
    return op1 / op2;
}

console.log(operate(10, "/", 10));