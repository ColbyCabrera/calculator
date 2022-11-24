function updateDisplay(data) {
    const display = document.querySelector('.output');
    console.log(data);
    console.log(data.search("add"));

    if (data.search("add") > 0) {
        data = data.replace("add", "+");
    } else if (data.search("subtract") > 0) {
        data = data.replace("subtract", "-");
    } else if (data.search("multiply") > 0) {
        data = data.replace("multiply", "×");
    } else if (data.search("divide") > 0) {
        data = data.replace("divide", "÷");
    }

    display.textContent = data;
}

function clear() {
    expression = ["0", null, null];
    const display = document.querySelector('.output');
    display.textContent = "0";
}

function deleteLast() {
    
}

function eval() {
    console.log(expression);
    if (expression[2] != null) {
        updateDisplay(operate(expression[0], expression[1], expression[2]) + "");
    }
    
}

function operate(operand1, operator, operand2) {

    console.log("here");
    console.log(operator);

    if (operator === "multiply") {
        return multiply(operand1, operand2);
    } else if (operator === "divide") {
        return divide(operand1, operand2);
    } else if (operator === "add") {
        return add(operand1, operand2);
    } else {
        return subtract(operand1, operand2);
    }
}

function add(op1, op2) {
    return parseInt(op1) + parseInt(op2);
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

function createExpression(event) {

    let classes, type, data;

    if (Array.from(event.target.classList).includes("operator") 
        || Array.from(event.target.classList).includes("number")) {
        classes = Array.from(event.target.classList);

    } else {
        classes = Array.from(event.target.parentElement.classList);
    }

    if (classes.includes("number")) {
        type = "num";
        data = classes[0];
        
    } else {
        type = "op";
        data = classes[0];
    }

    if (type === "num" && expression[1] === null) {
        if (expression[0] == 0) {
            expression[0] = data;
        } else {
            expression[0] = expression[0] + "" + data;
        }

        updateDisplay(expression[0]);
    } else if (type === "num") {
        if (expression[2] == 0 || expression[2] === null) {
            expression[2] = data;
        } else {
            expression[2] = expression[2] + "" + data;
        }

        updateDisplay(expression[0] + " " + expression[1] + " " + expression[2]);
    } else if (expression[1] === null) {
        expression[1] = data;
        updateDisplay(expression[0] + " " + expression[1]);
    }


    
}

const numbers = Array.from(document.querySelectorAll(".number"));
const operators = Array.from(document.querySelectorAll(".operator"));
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const equalBtn = document.querySelector(".equal");
let expression = ["0", null, null];

numbers.forEach(number => {
    number.addEventListener('click', createExpression);
});

operators.forEach(operator => {
    operator.addEventListener('click', createExpression);
});

clearBtn.addEventListener('click', clear);
deleteBtn.addEventListener('click', deleteLast);
equalBtn.addEventListener('click', eval);
// get clicked class
// if clicked is num and op is null concat to num1
// if clicked is op and there is num1 then change op
// if op is nonnull and num is clicked concat to num2