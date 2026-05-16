// SELECT BUTTONS (NUMBERS / ARITHMETIC OPERATORS / EQUALS SIGN)
const numbersMath = document.querySelectorAll('.number-math');
// const math = document.querySelectorAll('.math');
const equals = document.querySelector('.equals');

// SELECT DISPLAY
const display = document.querySelector('.display-number');

// SELECT AC / BACK
const ac = document.querySelector('.ac-btn');
const backBtn = document.querySelector('.back-btn');

// VARIABLE TO HOLD CHARACTERS IN THE DISPLAY
let displayCharacters = "";


// EVENT LISTENER FOR NUMBERS AND ARITHMETIC OPERATORS
for (let i = 0; i < numbersMath.length; i++) {
    numbersMath[i].addEventListener("click", function() {

        // PREVENT LEADING ZEROS IF ZERO IS PRESSED NUMEROUS TIMES
        if (displayCharacters === "0" && numbersMath[i].textContent === "0") {
            return;
        } 
        
        // IF DISPLAY JUST HAS SINGLE ZERO, REPLACE IT INSTEAD OF APPENDING
        if (displayCharacters === "0") {
            displayCharacters = numbersMath[i].textContent;
        } else {
            displayCharacters += numbersMath[i].textContent;
        }

        display.textContent = displayCharacters
    });
};


// FUNCTION FOR ADDITION
function mathPlus (num1, num2) {
        return num1 + num2;
    };

// FUNCTION FOR SUBTRACTION
function mathMinus (num1, num2) {
        return num1 - num2;
    };

// FUNCTION FOR MULTIPLICATION
function mathMultiply (num1, num2) {
        return num1 * num2;
    };

// FUNCTION FOR DIVISION
function mathDivide (num1, num2) {
        return num1 / num2;
    };



// EVENT LISTENER FOR AC (CLEAR) BUTTON
ac.addEventListener("click", function() {
    display.textContent = "0";
    displayCharacters = "";
});

// EVENT LISTNER FOR BACK BUTTON
backBtn.addEventListener("click", function(){
    if (display.textContent != "0") {
        displayCharacters = displayCharacters.slice(0, -1);
        display.textContent = displayCharacters;
    };

    if (displayCharacters.length === 0) {
        display.textContent = "0";
    };
});

// EVENT LISTENER FOR EQUALS BUTTON
equals.addEventListener("click", function(){
    let result = 0;

   if (displayCharacters.includes("+")) {
        let plus = displayCharacters.indexOf("+");
        let afterPlus = plus + 1;
        result = mathPlus(parseFloat(displayCharacters.slice(0,plus)), parseFloat(displayCharacters.slice(afterPlus)));
   } else if (displayCharacters.includes("-")) {
        let minus = displayCharacters.indexOf("-");
        let afterminus = minus + 1;
        result = mathMinus(parseFloat(displayCharacters.slice(0,minus)), parseFloat(displayCharacters.slice(afterminus)));
   } else if (displayCharacters.includes("×")) {
        let multiply = displayCharacters.indexOf("×");
        let afterMultiply = multiply + 1;
        result = mathMultiply(parseFloat(displayCharacters.slice(0,multiply)), parseFloat(displayCharacters.slice(afterMultiply)));
   } else if (displayCharacters.includes("÷")) {
        let divide = displayCharacters.indexOf("÷");
        let afterDivide = divide + 1;
        result = mathDivide(parseFloat(displayCharacters.slice(0,divide)), parseFloat(displayCharacters.slice(afterDivide)));
   } else {
        return;
   }

   // UPDATE DISPLAY TO ANSWER SO USER CAN KEEP CALCULATING 
   display.textContent = result;
   displayCharacters = result.toString();
    
});

