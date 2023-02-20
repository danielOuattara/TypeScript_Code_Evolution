"use strict";
exports.__esModule = true;
console.log("-------");
/*--------------------------------------------------- */
/*Arrays
============*/
// Syntaxes for declaring an Array of number
var list1 = [1, 2, 3]; // syntax 1
var list2 = [1, 2, 3]; // syntax 2
// tuple : order and variables type must be respected
var person1 = ["John", 23];
console.log(person1);
person1.push("Julie"); // tuple accepts .push()
console.log(person1);
//---------------------------------------
/* Enums
===============*/
var availableColors;
(function (availableColors) {
    availableColors[availableColors["READ"] = 0] = "READ";
    availableColors[availableColors["GREEN"] = 1] = "GREEN";
    availableColors[availableColors["BLUE"] = 2] = "BLUE";
})(availableColors || (availableColors = {}));
var blue = availableColors.BLUE;
console.log(blue);
var carColor = availableColors.GREEN;
console.log("The car is ".concat(carColor));
console.log("-------");
//---------------------------------------
var Cars;
(function (Cars) {
    Cars[Cars["BMW"] = 4] = "BMW";
    Cars[Cars["Audi"] = 5] = "Audi";
    Cars[Cars["Mercedes"] = 6] = "Mercedes";
})(Cars || (Cars = {}));
//---------------------------------------
var BMW = Cars.BMW;
console.log("BMW = ", BMW);
var Audi = Cars.Audi;
console.log("Audi= ", Audi);
var Mercedes = Cars.Mercedes;
console.log("Mercedes = ", Mercedes);
console.log("-------");
//---------------------------------------
var superCars;
(function (superCars) {
    superCars["BMW"] = "BMW";
    superCars["AUDI"] = "Audi";
    superCars["MERCEDES"] = "Mercedes";
})(superCars || (superCars = {}));
var BMW2 = superCars.BMW;
console.log("BMW2 = ", BMW2);
var Audi2 = superCars.AUDI;
console.log("Audi2 = ", Audi2);
var Mercedes2 = superCars.MERCEDES;
console.log("Mercedes2 = ", Mercedes2);
console.log("-------");
//---------------------------------------
/* any type
============== */
var randomValue = 10;
randomValue = true; // OK
randomValue = "Daniel"; // OK
var myVariable = 10;
// console.log(myVariable.name); // No Error here, but Error on transpilation
// myVariable.toUpperCase(); // No Error here, but Error on transpilation
// since typeScript 3.0 : type  "unknown"
// let myUnknown: unknown = 10;
// console.log(myUnknown.name); // Error Here
// myUnknown.toUpperCase(); // Error Here
// type assertion = type casting
var anotherVariable = 10;
// console.log(anotherVariable.name);
// anotherVariable();
// (anotherVariable as string).toUpperCase();
//
// define a check guard //
// function hasName(obj: any): obj is { name: string } {
//   return !!obj && typeof obj == "object" && "name" in obj;
// }
// if (hasName(anotherVariable)) {
//   console.log(anotherVariable.name);
// }
// (anotherVariable as string).toUpperCase();
//
/* type inference: when the variable is initialized
---------------------------------------------------- */
var a;
a = 10;
a = true;
console.log(a);
var b = 20;
// b = true; // Incorrect
console.log(b);
/* Union of type
-----------------------*/
// intellisense is accessible here
var multiType;
multiType = 20;
multiType = true;
// intellisense is not accessible in any type
var anyType;
anyType = 20;
anyType = true;
