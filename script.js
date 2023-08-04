// Basic math operations
const add = (a,b) => a + b;

const subtract = (a,b) => a - b;

const multiply = (a,b) => a * b;

const divide = (a,b) => a / b;

// Calculator Function

const operate = function(num1, num2, operator) {
    switch(operator) {
        case "+":
            return(add(num1, num2));
        case "-":
            return(subtract(num1, num2));
        case "*":
            return(multiply(num1, num2));
        case "/":
            return(divide(num1, num2));
    }
}

var displayValue = '';
let num1;
let num2;
var operator;

document.getElementById("display").innerText = displayValue;

function setValue(e, displayValue) {
    displayValue += e.innerText;
    document.getElementById("display").innerText = displayValue;
    //console.log(e.innerText);
}

const digits = Array.from(document.querySelectorAll('button.digit'));
digits.forEach(digit => digit.addEventListener('click', () => {setValue(digit, displayValue)}));




