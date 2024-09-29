const display = document.getElementById("display");
let currentInput = "";
let previousInput = "";
let operation = null;
let shouldResetDisplay = false;

function appendToDisplay(input) {
    if (shouldResetDisplay) {
        currentInput = "";
        shouldResetDisplay = false;
    }
    if (input === "." && currentInput.includes(".")) return;
    currentInput += input;
    updateDisplay();
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operation = null;
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput;
}

function setOperation(op) {
    if (currentInput === "") return;
    if (previousInput !== "") {
        calculate();
    }
    operation = op;
    previousInput = currentInput;
    shouldResetDisplay = true;
}

function calculate() {
    if (previousInput === "" || currentInput === "" || operation === null) return;

    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operation) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            if (current === 0) {
                result = "Erro: Divisão por zero";
            } else {
                result = prev / current;
            }
            break;
        default:
            return;
    }

    currentInput = result.toString();
    previousInput = "";
    operation = null;
    updateDisplay();
    shouldResetDisplay = true;
}