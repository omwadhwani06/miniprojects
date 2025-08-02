let outputDiv = document.querySelector('.output');
let currentInput = '';
let resultDisplayed = false;

function updateOutput(value) {
    if (resultDisplayed) {
        currentInput = '';
        resultDisplayed = false;
    }
    currentInput += value;
    outputDiv.innerText = currentInput;
}

function clearOutput() {
    currentInput = '';
    outputDiv.innerText = '';
}

function calculate() {
    try {
        let sanitizedInput = currentInput.replace(/x/g, '*').replace(/\\/g, '/');
        let result = eval(sanitizedInput);
        outputDiv.innerText = result;
        resultDisplayed = true;
    } catch (e) {
        outputDiv.innerText = 'Error';
    }
}


document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        let value = button.innerText;

        if (value === 'Ac ❎') {
            clearOutput();
        } else if (value === '=') {
            calculate();
        } else {
            updateOutput(value);
        }
    });
});
