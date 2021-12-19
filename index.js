// required packages
const fs = require('fs');
const inquirer = require('inquirer')


//employee profiles
class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee'
  }
  getName() {
    return this.name;
  }
  getID() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }
};

class Manager extends Employee {
  constructor(name, id, email, role, officeNumber) {
    super(name, id, email, role, officeNumber)
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

class Engineer extends Employee {
  constructor(name, id, email, role, gitHub) {
    super(name, id, email, role);
    this.gitHub = gitHub;
  }
  getGithub() {
    return this.gitHub;
  }
}

class Intern extends Employee {
  constructor(name, id, email, role, school) {
    super(name, id, email, role);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
}