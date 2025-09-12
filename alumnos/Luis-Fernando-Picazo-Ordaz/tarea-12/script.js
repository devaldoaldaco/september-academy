const displayInput = document.getElementById('display-input')
const clearDisplayBtn = document.getElementById('clear-display')
const numberBtns = document.querySelectorAll('.show-number')
const operatorBtns = document.querySelectorAll('.show-operator')
const periodBtn = document.querySelector('.show-period')
const eraseBtn = document.getElementById('erase')
const equalBtn = document.getElementById('equal')
const operators = ['+', '-', '/', '*']
let expresionElements = []


numberBtns.forEach((element) => {
    element.addEventListener('click', () => {
        displayInput.textContent += `${element.id}`
        addExpresionElements(element.id)
    })
})

periodBtn.addEventListener('click', () => {
    if (!displayInput.textContent.includes('.')) {
        displayInput.textContent += `${periodBtn.id}`
        addExpresionElements(periodBtn.id)
    }
})

operatorBtns.forEach((element) => {
    element.addEventListener('click', () => {
        const content = displayInput.textContent.trim();
        const lastChar = displayInput.textContent[displayInput.textContent.length - 1];

        if (!operators.includes(lastChar) && content !== '') {
            displayInput.textContent += `${element.id}`
            addExpresionElements(element.id)
        }
    })
})

clearDisplayBtn.addEventListener('click', () => {
    clearDisplay()
})

eraseBtn.addEventListener('click', () => {
    expresionElements.pop()
    displayInput.textContent = expresionElements.join('')
})

equalBtn.addEventListener('click', () => {
    const result = evaluateExpresion(expresionElements)
    displayInput.textContent = result;
})

function clearDisplay() {
    displayInput.textContent = ''
    expresionElements = []
}


function addExpresionElements(element) {
    const lastChar = expresionElements[expresionElements.length - 1];

    if (operators.includes(element)) {
        expresionElements.push(element);
    } else {
        if (lastChar === undefined || operators.includes(lastChar)) {
            expresionElements.push(element);
        } else {
            expresionElements[expresionElements.length - 1] += element;
        }
    }
}



function evaluateExpresion(expresion) {
    let i = 0;
    while (expresion.includes("*") || expresion.includes("/")) {
        const operator = expresion[i];

        if (operator === "*" || operator === "/") {
            const leftNumber = parseFloat(expresion[i - 1], 10);
            const rightNumber = parseFloat(expresion[i + 1], 10);
            const result = operator === "*" ? leftNumber * rightNumber : leftNumber / rightNumber;
            expresion.splice(i - 1, 3, result.toString());
            i = 0;
        } else {
            i++;
        }
    }

    i = 0;
    while (expresion.includes("+") || expresion.includes("-")) {
        const operator = expresion[i];

        if (operator === "+" || operator === "-") {
            const leftNumber = parseFloat(expresion[i - 1], 10);
            const rightNumber = parseFloat(expresion[i + 1], 10);
            const result = operator === "+" ? leftNumber + rightNumber : leftNumber - rightNumber;
            expresion.splice(i - 1, 3, result.toString());
            i = 0;
        } else {
            i++;
        }
    }

    return parseFloat(expresion[0], 10);
}

