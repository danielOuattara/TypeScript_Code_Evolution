/*
 * writing this lines below help typescript
 * consider this file as a module and not a
 * script
 */
export {};
/*--------------------------------------------------- */

let message = "Hello World !";
console.log(message);

/* variables declaration 
=========================*/
let x = 10;
const myGender = "male";

let numbers: number = 12;

let sum;

let sum2: number;
const title = "CodeEvolution";

let isBeginner: boolean = true; // declaration & initialization
let total: number; // declaration,
total = 0; // --> intellisense of total: total.something

//----------------------------------
let name: string = "Danny Boy";
let sentence: string = `${name} started learning TypeScript this month`;
console.log(sentence);

console.log("-------");
// ---------------------------------
let n: null = null;
let undef: undefined = undefined;

// let isBool: boolean = null; // Incorrect  bool is not null
// let myName: string = undefined; //  incorrect: string is  undefined
