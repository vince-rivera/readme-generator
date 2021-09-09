// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the name of your Project?",
        name: "Project Title"
    },
    {
        type: "input",
        message: "What is the name of the user?",
        name: "User"
    },
    {
        type: "input",
        message: "Give a description of your project.",
        name: "Description"
    },
    {
        type: "input",
        message: "What are the installation instructions for this project?",
        name: "Installation"
    },
    {
        type: "input",
        message: "How will this project be used?",
        name: "Usage"
    },
    {
        type: "input",
        message: "What licenses are required in this project?",
        name: "Licenses"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((inquirerAnswers, data) => {
            console.log("Questions Complete!")
        })
        .catch((err) => {
            console.log(err);
        })
}

// Function call to initialize app
init();
