"use strict";
exports.__esModule = true;
/* Functions in typeScript
=============================*/
function add(number1, number2) {
    return number1 + number2;
}
//----------------------------------------------------
function add2(number1, number2) {
    return number1 + number2;
}
add2(5, 0);
//----------------------------------------------------
function add3(number1, number2) {
    return number1 + number2;
}
add3(4, 1);
//
//----------------------------------------------------
// optional parameter: must be the last in declaration.
function add4(number1, number2) {
    if (number2) {
        return number1 + number2;
    }
    else {
        return number1;
    }
}
console.log("add4(5) = ", add4(5));
//
// ----------------------------------------------------
// default parameter
function add5(number1, number2) {
    if (number2 === void 0) { number2 = 10; }
    if (number2) {
        return number1 + number2;
    }
    else {
        return number1;
    }
}
console.log("add5(10) = ", add5(10));
//-----------------------------------------------------
