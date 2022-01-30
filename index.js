// TODO: Include packages needed for this application
//packages needed inputted
const inquirer = require("inquirer"); //inquire is needed
const fs = require("fs");
const path = require("path");

const generateMarkdown = require("./utils/generateMarkdown"); // generates the readme page

const questions = [
  {
    type: "input",
    name: "projectname",
    message: "Enter the name of the project",
  },
  {
    type: "input",
    name: "Projectdescription",
    message: "Enter a short description",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter the installation details",
  },
  {
    type: "input",
    name: "githubusername",
    message: "Provide your github username",
  },
  {
    type: "input",
    name: "gitubprofile",
    message: "Provide your github profile link",
  },
  {
    type: "input",
    name: "Email",
    message: "Provide your email",
  },
  {
    type: "checkbox",
    message: "Select the license you want to use.",
    name: "license",
    choices: ["Apache", "GNU", "MIT", "none"],
  },
  {
    type: "input",
    name: "dependencies",
    message: "Any dependencies to install?",
    default: "npm i",
  },
  {
    type: "input",
    name: "test",
    message: "What command should be used to run tests?",
    default: "npm test",
  },
  {
    type: "input",
    name: "Usage",
    message: "Enter the usage",
  },
  {
    type: "input",
    name: "contributors",
    message: "Who are the contributors?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((inquirerAnswers) => {
    console.log("Generating.... Please wait....");
    writeToFile("./GEN-README.md", generateMarkdown({ ...inquirerAnswers }));
  });
}


init();
