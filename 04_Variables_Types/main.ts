/*
 * writing this line help typescript consider
 * this file as a module and not a script
 */
export {};
console.log("-------");
/*--------------------------------------------------- */

/* variables declaration 
=========================*/

let numbers: number = 12;

let sum; // type any
let sum2: number;
const title = "CodeEvolution";

let isBeginner: boolean = true; // declaration & initialisation
let total: number; // declaration,
total = 0; // --> intellisense of total: total.something

//----------------------------------
let name: string = "Danny Boy";
let sentence: string = `${name} started learning Typscript this month`;
console.log(sentence);

console.log("-------");
// ---------------------------------
let n: null = null;
let undef: undefined = undefined;

let isBool: boolean = null;
let myName: string = undefined;

/*Arrays 
============*/

// Syntaxes for delcaring an Aray of number
let list1: number[] = [1, 2, 3]; // syntax 1
let list2: Array<number> = [1, 2, 3]; // syntax 2

// tuple : order and varialbes type must be respected
let person1: [string, number] = ["John", 23];
console.log(person1);

console.log("-------");

/* Enums 
===============*/
enum Colors {
  READ,
  GREEN,
  BLUE,
}
let blue: Colors = Colors.BLUE;
console.log(blue);

let carColor: Colors = Colors.GREEN;
console.log(`The car is ${carColor}`);

console.log("-------");

//--------------

enum Cars {
  BMW = 4,
  Audi,
  Mercedes,
}

let BMW: Cars = Cars.BMW;
console.log(BMW);
let Audi: Cars = Cars.Audi;
console.log(Audi);
let Mercedes: Cars = Cars.Mercedes;
console.log(Mercedes);

/* any type
============== */

let randomValue: any = 10;
randomValue = true;
randomValue = "Daniel";

let myVariable: any = 10;
console.log(myVariable.name); // No error
myVariable.toUpperCase() // No error

// since typeScript 3.0 : type  "unknown"

let unkownType: unknown = 10;

// // type assertion = type casting

// let anotherVariable: unknown = 10;

// function hasName(obj: any): obj is { name: string} {
//   return !!obj && typeof obj == "object" && "name" in obj;
// }

// if (hasName(anotherVariable)){
//   console.log(anotherVariable.name);
// }
// (anotherVariable as string).toUpperCase();

/* type inference: when the variable is initialised 
=====================*/

let a;
a = 10;
a = true;
console.log(a);

let b = 20;
console.log(b);

/* Union of type*/

let multiType: number | boolean;
multiType = 20;
multiType = true;
// intellisense is accessible here

let anyType: any;
anyType = 20;
anyType = true;
// intellisense is not accessible in any type
