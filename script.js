const display = document.querySelector(".display");
updateDisplay("0");

let x = "";
let operator = "";
let y = "";
let result = 0;
let isTypingSecondOperand = false;
let dotCount = 0;

let buttons = document.querySelectorAll("button");
buttons.forEach( (button) => {
    button.addEventListener("click", () => {
        switch (button.textContent) {
            case "AC":
                x = "";
                y = "";
                updateDisplay("0");
                isTypingSecondOperand = false;
                operator = "";
                break;
            case "←":
            case "+/-":
            case "/":
            case "*":
            case "-":
            case "+":
                operatorClicked(button.textContent);
                break;
            case ".":
                displayPopulate(button.textContent);
                break;
            case "=":
                result = operate(x, y, operator);
                if (typeof result === "string") { // check if result is an error message
                    updateDisplay(result);
                    x = ""; 
                    y = "";
                } else {
                    updateDisplay(+result.toFixed(4));
                    x = result;
                    y = "";
                }
                isTypingSecondOperand = false;
                break;
            default:
                displayPopulate(button.textContent);
        }
    })
})

function add(a, b) {
    return +a + +b;
};
function subtract(a, b) {
    return +a - +b;
};
function multiply(a, b) {
    return +a * +b;
};
function divide(a, b) {
    if (+b === 0) {
        return "Division by 0";
    }
    return +a / +b;
};

function operate (a, b, operator) {

    if (b == "") return;

    switch (operator) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
    } 
}

function displayPopulate (number) {

    if (number == "0" && x == 0 && !isTypingSecondOperand) return;

    //condition for negative number inputted
    if (operator == "-" & x == 0) {
        y = number;
        result = y - (y * 2);
        console.log(result);
        updateDisplay(result);
        x = result;
        y = "";
        result = "";
        operator = "";
        return;
    }

    if (dotCount == 0 && number == ".") {
        dotCount++;
    }
    else if (dotCount > 0) {
        dotCount = 0; 
        return;
    }

    // calculation if we are on the first number, else second number
    if (!isTypingSecondOperand) {
        if (x == 0) {
            x = number;
            updateDisplay(x);
            return;
        }
        x = x + number;
        updateDisplay(x);
    }
    else {
        y = y + number;
        updateDisplay(y);
    }
}

function operatorClicked (inputOperator) {
    console.log(`x ${x}, y ${y}, result ${result}`);

    if (inputOperator == "+/-") {
        if (!isTypingSecondOperand && x != 0) {
            x = x - (x * 2);
            updateDisplay(+x.toFixed(4));
        }
        else if (isTypingSecondOperand && y != "") {
            y = y - (y * 2);
            updateDisplay(+y.toFixed(4));
        }
        return;
    }

    if (inputOperator == "←") {
        if (!isTypingSecondOperand && display.textContent.length > 1) {
            x = x.slice(0, -1);
            updateDisplay(x);
        }
        else if (isTypingSecondOperand && display.textContent.length > 1) {
            y = y.slice(0, -1);
            updateDisplay(y);
        }
        return;
    }

    if (x !== "" && y !== "") {
        
        result = operate(x, y, operator);
        
        if (typeof result === "string") { // check if result is an error message
            updateDisplay(result);
            x = ""; 
            y = "";
        }
        else {
        updateDisplay(+result.toFixed(4));
        x = result;
        y = "";
        }
    }
    operator = inputOperator;
    isTypingSecondOperand = true;
}

// Function to resize font based on the length of the text
function adjustFontSize() {
    let fontSize = 50; // default font size
    display.style.fontSize = fontSize + "px";

    while (display.scrollWidth > display.clientWidth && fontSize > 10) {
        fontSize -= 1;
        display.style.fontSize = fontSize + "px";
    }
}

// Call adjustFontSize() whenever you update the display text
function updateDisplay(text) {
    display.textContent = text;
    adjustFontSize();
}