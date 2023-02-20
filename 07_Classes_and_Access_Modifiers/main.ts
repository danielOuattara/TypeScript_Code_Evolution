export {};

/* Classes and Access Modifiers
------------------------------- */

// create class

class Employee {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Good morning ${this.name}`);
  }
}

let employee1 = new Employee("Daniel");
console.log(employee1.name);
employee1.greet();

console.log("---------------");
//
// ---------------------------------------------

// Inheritance

class Manager extends Employee {
  managerSalary: number;
  constructor(name: string, managerSalary: number) {
    super(name);
    this.managerSalary = managerSalary;
  }

  hireEmployee(person: string) {
    console.log(`${this.name} has hired ${person}`);
  }

  whoIam() {
    console.log(`Hi ! I am ${this.name}. My salary is $${this.managerSalary}`);
  }
}

let manager1 = new Manager("Steeve", 130000);
manager1.name;
manager1.greet();
manager1.hireEmployee("Daniel");
manager1.whoIam();
console.log("---------------");

//

// ---------------------------------------------

// optional parameter in class

class Worker {
  firstName: string;
  lastName: string;
  city?: string;
  age?: number;

  constructor(
    firstName: string,
    lastName: string,
    city?: string,
    age?: number,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.age = age;
  }

  greeting() {
    console.log(`Good morning ${this.firstName} ${this.lastName}`);
  }
}

let worker1 = new Worker("Jane", "Doe");
console.log(worker1.firstName);
console.log(worker1.age);
console.log(worker1.city);
worker1.greeting();

//---

let worker2 = new Worker("John", "Doe", "Gao", 32);
console.log(worker2.age);
console.log(worker2.city);
worker1.greeting();

console.log("---------------");

/* Access modifier for classes (public, private, protected) 
------------------------------------------------------------ */

// public    => accessible from anywhere
// private   => only accessible from the class
// protected => only accessible from the class ans subclass

class Employee2 {
  public firstName: string;
  private lastName: string;
  protected ssn: number;

  constructor(firstName: string, lastName: string, ssn: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.ssn = ssn;
  }

  description1() {
    console.log(`Good morning ${this.firstName}`);
  }

  description2() {
    console.log(`Good morning ${this.firstName} ${this.lastName}`);
  }

  description3() {
    console.log(
      `Good morning ${this.firstName} ${this.lastName} SSN is ${this.ssn}`,
    );
  }
}

let employee2 = new Employee2("Julie", "Durant", 1_341_222_344);

console.log(employee2.firstName);
// console.log(employee2.lastName); // Error: Property 'lastName' is private and only accessible within class 'Employee2'.ts(2341)
// console.log(employee2.ssn); // Error : Property 'ssn' is protected and only accessible within class 'Employee2' and its subclasses.ts(2445)
employee2.description1();
employee2.description2();
employee2.description3();

// -------------------------------------------------

class Manager2 extends Employee2 {
  private managerSalary: number;
  constructor(
    firstName: string,
    lastName: string,
    ssn: number,
    managerSalary: number,
  ) {
    super(firstName, lastName, ssn);
    this.managerSalary = managerSalary;
  }

  whoIam() {
    console.log(
      `Hi ! I am ${this.firstName}. My salary is $${this.managerSalary}`,
    );
  }

  hireEmployee(person: string) {
    console.log(`${this.firstName} has hired ${person}`);
  }
}

let manager2 = new Manager2("Steeve", "Job", 123_456_789, 350_000);
manager2.firstName;
manager2.whoIam();
manager2.hireEmployee("Provence");

// manager2.managerSalary; // Property 'managerSalary' is private and only accessible within class 'Manager2'.

console.log("---------------");

/* Access modifier for classes (public, private, protected): simplified class syntax 
------------------------------------------------------------------------------------- */

// public    => accessible from anywhere
// private   => only accessible from the class
// protected => only accessible from the class ans subclass

class Employee3 {
  constructor(
    public firstName: string,
    private lastName: string,
    protected ssn: number,
  ) {}

  description1() {
    console.log(`Good morning ${this.firstName}`);
  }

  description2() {
    console.log(`Good morning ${this.firstName} ${this.lastName}`);
  }

  description3() {
    console.log(
      `Good morning ${this.firstName} ${this.lastName} SSN is ${this.ssn}`,
    );
  }
}

// -------------------------------------------------------------------

class Manager3 extends Employee2 {
  constructor(
    public firstName: string,
    lastName: string,
    protected ssn: number,
    private managerSalary: number,
  ) {
    super(firstName, lastName, ssn);
  }

  whoIam() {
    console.log(
      `Hi ! I am ${this.firstName}. My salary is $${this.managerSalary}`,
    );
  }

  hireEmployee(person: string) {
    console.log(`${this.firstName} has hired ${person}`);
  }
}

let manager3 = new Manager3("Steeve", "Job", 987_654_321, 1_123_000);
manager3.firstName;
// manager3.lastName; // Property 'lastName' is private and only accessible within class 'Employee2'.ts(2341)
manager3.whoIam();
manager3.hireEmployee("Provence");

console.log("---------------");

//------------------------------------------------------
