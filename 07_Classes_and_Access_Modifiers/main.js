"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/* Classes and Access Modifiers
------------------------------- */
// create class
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good morning ".concat(this.employeeName));
    };
    return Employee;
}());
var employee1 = new Employee("Daniel");
console.log(employee1.employeeName);
employee1.greet();
console.log("---------------");
// ---------------------------------------------
// Inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerFirstName) {
        return _super.call(this, managerFirstName) || this;
    }
    Manager.prototype.hireEmployee = function (person) {
        console.log("".concat(this.employeeName, " has hired ").concat(person));
    };
    return Manager;
}(Employee));
var manager1 = new Manager("Steeve");
manager1.employeeName;
manager1.greet();
manager1.hireEmployee("Daniel");
console.log("---------------");
//
// ---------------------------------------------
var Worker = /** @class */ (function () {
    function Worker(employeeFirstName, employeeLastName, employeeCity, employeeAge) {
        this.employeeFirstName = employeeFirstName;
        this.employeeLastName = employeeLastName;
        this.employeeCity = employeeCity;
        this.employeeAge = employeeAge;
    }
    Worker.prototype.greeting = function () {
        console.log("Good morning ".concat(this.employeeFirstName, " ").concat(this.employeeLastName));
    };
    return Worker;
}());
var worker1 = new Worker("Jane", "Doe");
console.log(worker1.employeeFirstName);
worker1.greeting();
console.log("---------------");
/* Access modifier for classes (public, private, protected)
------------------------------------------------------------ */
// public    => accessible from anywhere
// private   => only accessible from the class
// protected => only accessible from the class ans subclass
var Employee2 = /** @class */ (function () {
    function Employee2(firstName, lastName, ssn) {
        this.employeeFirstName = firstName;
        this.employeeLastName = lastName;
        this.employeeSSN = ssn;
    }
    Employee2.prototype.description1 = function () {
        console.log("Good morning ".concat(this.employeeFirstName));
    };
    Employee2.prototype.description2 = function () {
        console.log("Good morning ".concat(this.employeeFirstName, " ").concat(this.employeeLastName));
    };
    Employee2.prototype.description3 = function () {
        console.log("Good morning ".concat(this.employeeFirstName, " ").concat(this.employeeLastName, " SSN is ").concat(this.employeeSSN));
    };
    return Employee2;
}());
var employee2 = new Employee2("Julie", "Durant", 1341222344);
console.log(employee2.employeeFirstName);
// console.log(employee2.employeeLastName); // Error
// console.log(employee2.employeeSSN); // Error
employee2.description1();
employee2.description2();
employee2.description3();
// console.log(employee2.employeeLastName);
// -----------------------
var Manager2 = /** @class */ (function (_super) {
    __extends(Manager2, _super);
    function Manager2(managerFirstName) {
        return _super.call(this, managerFirstName) || this;
    }
    Manager2.prototype.hireEmployee = function (person) {
        console.log("".concat(this.employeeName, " has hired ").concat(person));
    };
    return Manager2;
}(Employee));
var manager2 = new Manager2("Steeve");
manager2.employeeName;
manager2.greet();
manager2.hireEmployee("Provence");
console.log("---------------");
//------------------------------------------------------
var Manager3 = /** @class */ (function (_super) {
    __extends(Manager3, _super);
    function Manager3(managerFirstName) {
        return _super.call(this, managerFirstName) || this;
    }
    Manager3.prototype.hireEmployee = function (person) {
        console.log("".concat(this.employeeName, " has hired ").concat(person));
    };
    return Manager3;
}(Employee2));
var manager3 = new Manager3("Steeve");
manager3.employeeName;
manager3.greet();
manager3.hireEmployee("Provence");
console.log("---------------");
