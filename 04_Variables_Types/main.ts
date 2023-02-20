/*
 * writing this line help typescript consider
 * this file as a module and not a script
 */
export {};
console.log("-------");
/*--------------------------------------------------- */

/*Arrays 
============*/

// Syntaxes for declaring an Array of number
let list1: number[] = [1, 2, 3]; // syntax 1
let list2: Array<number> = [1, 2, 3]; // syntax 2

// tuple : order and variables type must be respected
let person1: [string, number] = ["John", 23];
console.log(person1);

person1.push("Julie"); // tuple accepts .push()
console.log(person1);

//---------------------------------------

/* Enums 
===============*/
enum availableColors {
  READ,
  GREEN,
  BLUE,
}
let blue: availableColors = availableColors.BLUE;
console.log(blue);

let carColor: availableColors = availableColors.GREEN;
console.log(`The car is ${carColor}`);

console.log("-------");

//---------------------------------------

enum Cars {
  BMW = 4,
  Audi,
  Mercedes,
}
//---------------------------------------

let BMW: Cars = Cars.BMW;
console.log("BMW = ", BMW);
let Audi: Cars = Cars.Audi;
console.log("Audi= ", Audi);
let Mercedes: Cars = Cars.Mercedes;
console.log("Mercedes = ", Mercedes);
console.log("-------");
//---------------------------------------

enum superCars {
  BMW = "BMW",
  AUDI = "Audi",
  MERCEDES = "Mercedes",
}
let BMW2: superCars = superCars.BMW;
console.log("BMW2 = ", BMW2);
let Audi2: superCars = superCars.AUDI;
console.log("Audi2 = ", Audi2);
let Mercedes2: superCars = superCars.MERCEDES;
console.log("Mercedes2 = ", Mercedes2);
console.log("-------");
//---------------------------------------

/* any type
============== */

let randomValue: any = 10;
randomValue = true; // OK
randomValue = "Daniel"; // OK

let myVariable: any = 10;
// console.log(myVariable.name); // No Error here, but Error on transpilation
// myVariable.toUpperCase(); // No Error here, but Error on transpilation

// since typeScript 3.0 : type  "unknown"

// let myUnknown: unknown = 10;
// console.log(myUnknown.name); // Error Here
// myUnknown.toUpperCase(); // Error Here

// type assertion = type casting

let anotherVariable: unknown = 10;

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

let a;
a = 10;
a = true;
console.log(a);

let b = 20;
// b = true; // Incorrect
console.log(b);

/* Union of type
-----------------------*/

// intellisense is accessible here
let multiType: number | boolean;
multiType = 20;
multiType = true;

// intellisense is not accessible in any type
let anyType: any;
anyType = 20;
anyType = true;
