const display = document.getElementById("display");

// function to display the number
function appendNumber(number){
    display.value += number;
}

// function to display the operator
function appendOperator(operator){
    display.value += operator;
}

// function to clear display
function clearDisplay(){
    display.value = '';
}

// function to calculate
function calculate(){
    const expression = display.value;
    const result = eval(expression);
    display.value = result;
}

// function to delete value
function deleteValue(){
display.value = display.value.toString().slice(0,-1);
}