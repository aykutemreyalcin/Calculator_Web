const display = document.getElementById('display');

function append_to_display(input) {
    display.append(input);
}

function clear_display() {
    display.value = ""
}
