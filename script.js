const display = document.querySelector(".display");

let x = "";
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
                break;
            case "←":
                console.log("ok");
                break;
            case "%":
                console.log("ok");
                break;
            case "/":
                operator = button.textContent;
                isTypingSecondOperand = true;
                break;
            case "*":
                operator = button.textContent;
                isTypingSecondOperand = true;
                break;
            case "-":
                operator = button.textContent;
                isTypingSecondOperand = true;
                break;
            case "+":
                operator = button.textContent;
                isTypingSecondOperand = true;
                break;
            case ",":
                console.log("ok");
                break;
            case "=":
                result = operate(x,y,operator);
                display.textContent = result;
                x = result;
                y = "";
                break;
            default:
                displayPopulate(button.textContent);
        }
    })
})


function displayPopulate (number) {

    // // probably should try to find out how to keep separate every three numbers
    // // for (let i = 0; i < displayArray.length; i++) {
    // //     if (i % 3 == 0) displayArray.push(" ");
    // // }

    if (!isTypingSecondOperand) {
        x = x + number;
        display.textContent = x;
    }
    else {
        y = y + number;
        display.textContent = y;
    }

}


console.log(operate(2,2,"/"));