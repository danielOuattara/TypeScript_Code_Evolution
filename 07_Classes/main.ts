/* CLASSES 
============  */

// create class

class Employee {
  employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Good morning ${this.employeeName}`);
  }
}

let employee1 = new Employee("Daniel");

console.log(employee1.employeeName);
employee1.greet();

// -----------------------

// Inheritance

class Manager extends Employee {
  constructor(managerFirstName: string) {
    super(managerFirstName);
  }

  hireEmployee(person: string) {
    console.log(`${this.employeeName} has hired ${person}`);
  }
}

let manager1 = new Manager("Steeve");
manager1.employeeName;

manager1.greet();
manager1.hireEmployee("Daniel");

console.log("---------------");

// ---------------------------------------------

class Worker {
  employeeFirstName: string;
  employeeLastName: string;
  employeeCity: string;
  employeeAge: number;

  constructor(firstName: string, lastName: string) {
    this.employeeFirstName = firstName;
    this.employeeLastName = lastName;
  }

  greeting() {
    console.log(
      `Good morning ${this.employeeFirstName} ${this.employeeLastName}`
    );
  }
}

let worker1 = new Worker("Jane", "Doe");

console.log(worker1.employeeFirstName);
worker1.greeting();

console.log("---------------");

// Access modifier for classes (public, private, protected)

//public = default

class Employee2 {
  public employeeFirstName: string;
  private employeeLastName: string;
  protected employeeSSN: number;

  constructor(firstName: string, lastName: string, ssn: number) {
    this.employeeFirstName = firstName;
    this.employeeLastName = lastName;
    this.employeeSSN = ssn;
  }

  description1() {
    console.log(`Good morning ${this.employeeFirstName}`);
  }
  description2() {
    console.log(
      `Good morning ${this.employeeFirstName} ${this.employeeLastName}`
    );
  }
  description3() {
    console.log(
      `Good morning ${this.employeeFirstName} ${this.employeeLastName} SSN is ${this.employeeSSN}`
    );
  }
}

let employee2 = new Employee2("Julie", "Durand", 1341222344);

console.log(employee2.employeeFirstName);
// console.log(employee2.employeeLastName); // Error
// console.log(employee2.employeeSSN); // Error
employee2.description1();
employee2.description2();
employee2.description3();

// console.log(employee2.employeeLastName);

// -----------------------

class Manager2 extends Employee {
  constructor(managerFirstName: string) {
    super(managerFirstName);
  }

  hireEmployee(person: string) {
    console.log(`${this.employeeName} has hired ${person}`);
  }
}

let manager2 = new Manager2("Steeve");
manager2.employeeName;

manager2.greet();
manager2.hireEmployee("Provence");

console.log("---------------");
