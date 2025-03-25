const display = document.getElementById('display');

function append_to_display(input) {
    display.value += input;
}

function clear_display() {
    display.value = ""
}

function calculate() {
    try {
        display.value = (eval(display.value)).toFixed(2)
    } 
    catch (error) {
        display.value = "Error";
    }
}

function reverse() {
    display.value = -(display.value)
}