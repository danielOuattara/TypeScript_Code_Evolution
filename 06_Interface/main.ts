export {};

/* Interface
------------------ */

function fullName(person: { firstName: string; lastName: string }) {
  return `My name is ${person.firstName} ${person.lastName}`;
}

let john = {
  firstName: "John",
  lastName: "Doe",
  city: "L.A",
};

console.log(fullName(john));

//---- how to make cleaner ? : use interface

interface Person {
  firstName: string;
  lastName?: string;
}

function fullName2(person: Person) {
  return `My name is ${person.firstName} ${person.lastName} (with interface)`;
}

console.log(fullName2(john));

//------------------------
// optional variable properties interface
//
interface Person3 {
  firstName: string;
  lastName?: string;
}

function fullName3(person: Person3) {
  return `My name is ${person.firstName} ${person.lastName} (with interface + optional variable)`;
}

let jane = {
  firstName: "Jane",
  // lastName: "Doe",
  city: "L.A",
};

console.log(fullName3(jane));

console.log("-----------");
