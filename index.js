// required packages
const fs = require('fs');
const inquirer = require('inquirer')

//page template js
const generateTeam = require('./src/page-template')

//template provided by instructor anthony


//employee profiles
const Employee = require('./lib/employee');
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

const employeeArray = [];

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
  employeeArray.push(newManager);
  addNewEmployee();
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
  let newEmployee;
  if (role === "Engineer") {
    newEmployee = new Engineer(name, id, email, role, github);
  } else newEmployee = new Intern(name, id, email, role, school);
  employeeArray.push(newEmployee);
  addNewEmployee();
}

const addNewEmployee = async () => {
  const { anotherEmployee } = await inquirer.prompt([
    {
      type: "confirm",
      name: "anotherEmployee",
      message: "do you need to add another employee?"
    }
  ])
  if (anotherEmployee) newEmployee();
  else writeFile();
}

const writeFile = () => {
  fs.writeFile('./dist/index.html', generateTeam(employeeArray), err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log('page created successfully')
    }
  })
}

const start = () => addManager();

start();