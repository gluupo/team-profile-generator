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

const addManager = async () => {
  const { name, id, email, officeNumber } = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "enter the manager's name:"
    },
    {
      type: "input",
      name: "id",
      message: "enter the manager's id:"
    },
    {
      type: "input",
      name: "email",
      message: "enter the manager's email:"
    },
    {
      type: "input",
      name: "officeNumber",
      message: "enter the manager's office number:"
    }
  ])
  const newManager = new Manager(name, id, email, "Manager", officeNumber)
}


const newEmployee = async () => {
  const { name, id, email, role, github, school } = await inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "choose the employee's role",
      choices: ["Engineer", "Intern"]
    },
    {
      type: "input",
      name: "name",
      message: "enter the employee's name:"
    },
    {
      type: "input",
      name: "id",
      message: "enter the employee's id:"
    },
    {
      type: "input",
      name: "email",
      message: "enter the employee's email:"
    },
    {
      type: "input",
      name: "github",
      message: "enter the employee's github username:",
      when: (input) => input.role === "Engineer"
    },
    {
      type: "input",
      name: "school",
      message: "enter the intern's school:",
      when: (input) => input.role === "Intern"
    }
  ])
}