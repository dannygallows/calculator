const display = document.querySelector(".display");
display.textContent = "0";

let x = 0;
let operator = "";
let y = "";
let result = 0;
let isTypingSecondOperand = false;


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
    return +a / +b;
};

function operate (a, b, operator) {

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

let buttons = document.querySelectorAll("button");
buttons.forEach( (button) => {
    button.addEventListener("click", () => {
        switch (button.textContent) {
            case "AC":
                x = "";
                y = "";
                display.textContent = "0";
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
                result = +operate(x,y,operator).toFixed(2);
                display.textContent = result;
                x = result;
                y = "";
                isTypingSecondOperand = false;
                break;
            default:
                displayPopulate(button.textContent);
        }
    })
})


function displayPopulate (number) {
    console.log(`x ${x}, y ${y}, result ${result}`);    

    // // probably should try to find out how to keep separate every three numbers
    // // for (let i = 0; i < displayArray.length; i++) {
    // //     if (i % 3 == 0) displayArray.push(" ");
    // // }

    if (number == "0" && x == 0 && !isTypingSecondOperand) return;

    //condition for negative number inputted
    if (operator == "-" & x == 0) {
        y = number;
        result = y - (y * 2);
        console.log(result);
        display.textContent = result;
        x = result;
        y = "";
        result = "";
        operator = "";
        return;
    }


    // calculation if we are on the first number, else second number
    if (!isTypingSecondOperand) {
        if (x == 0) {
            x = number;
            display.textContent = x;
            return;
        }
        x = x + number;
        display.textContent = x;
    }
    else {
        y = y + number;
        display.textContent = y;
    }
}

function operatorClicked (inputOperator) {
    console.log(`x ${x}, y ${y}, result ${result}`);

    if (inputOperator == "+/-") {
        if (!isTypingSecondOperand && x != 0) {
            x = x - (x * 2);
            display.textContent = x;
        }
        else if (isTypingSecondOperand && y != "") {
            y = y - (y * 2);
            display.textContent = y;
        }
        return;
    }

    if (inputOperator == "←") {
        if (!isTypingSecondOperand && display.textContent.length > 1) {
            x = x.slice(0, -1);
            display.textContent= x;
        }
        else if (isTypingSecondOperand && display.textContent.length > 1) {
            y = y.slice(0, -1);
            display.textContent= y;
        }
        return;
    }
    
    if (inputOperator == "/" && y == "0") {
        display.textContent = "Division by 0";
        x = "";
        y = "";
        isTypingSecondOperand = false;
        return;
    }

    if (x !== "" && y !== "") {
        result = +operate(x, y, operator).toFixed(2);
        display.textContent = result;
        x = result;
        y = "";
    }

    operator = inputOperator;
    isTypingSecondOperand = true;
}