"use strict";
exports.__esModule = true;
/* Interface
------------------ */
function fullName(person) {
    return "My name is ".concat(person.firstName, " ").concat(person.lastName);
}
var john = {
    firstName: "John",
    lastName: "Doe",
    city: "L.A"
};
console.log(fullName(john));
function fullName2(person) {
    return "My name is ".concat(person.firstName, " ").concat(person.lastName, " (with interface)");
}
console.log(fullName2(john));
function fullName3(person) {
    return "My name is ".concat(person.firstName, " ").concat(person.lastName, " (with interface + optional variable)");
}
var jane = {
    firstName: "Jane",
    // lastName: "Doe",
    city: "L.A"
};
console.log(fullName3(jane));
console.log("-----------");
