let a = 100, b = 10;


function math(operation, arr) {
    return arr[operation](a, b);
}

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function mult (a, b) {
    return a * b;
}

function div (a, b) {
    return a / b;
}

let arr = [add, subtract, mult, div];

console.log(math(2, arr));