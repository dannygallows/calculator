const display = document.querySelector(".display");

let x = 0;
let y = 0;
let operator = "";
let displayArray = [];

function add(a, b) {
    return a + b;
};
function subtract(a, b) {
    return a - b;
};
function multiply(a, b) {
    return a * b;
};
function divide(a, b) {
    return a / b;
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
                console.log("ok");
                break;
            case "←":
                console.log("ok");
                break;
            case "%":
                console.log("ok");
                break;
            case "/":
                console.log("ok");
                break;
            case "*":
                console.log("ok");
                break;
            case "-":
                console.log("ok");
                break;
            case "+":
                console.log("ok");
                break;
            case ",":
                console.log("ok");
                break;
            default:
                displayPopulate(button.textContent);
        }
    })
})

function displayPopulate (number) {
    displayArray.push(number);
    
    // probably should try to find out how to keep separate every three numbers
    // for (let i = 0; i < displayArray.length; i++) {
    //     if (i % 3 == 0) displayArray.push(" ");
    // }

    output = displayArray.join("");
    display.textContent = output;
}


console.log(operate(2,2,"/"));