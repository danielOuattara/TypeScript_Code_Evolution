/*
 * writing this line help typescript consider
 * this file as a module and not a script
 */
export {};
console.log("-------");
/*--------------------------------------------------- */

let message = "Hello World !";
console.log(message);

/* variables declaration 
=========================*/
let x = 10;
const y = 20;

let numbers: number = 12;

let sum;
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
