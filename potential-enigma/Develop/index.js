// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the name of your Project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the name of the user?",
        name: "user"
    },
    {
        type: "input",
        message: "Give a description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "What are the installation instructions for this project?",
        name: "installation"
    },
    {
        type: "input",
        message: "How will this project be used?",
        name: "usage"
    },
    {
        type: "list",
        message: "What licenses are required in this project?",
        name: "Licenses",
        choices: [
            "MIT",
            "Apache",
            "GPL",
            "compliant"
        ]
    }
];

// TODO: Create a function to write README file
// fs.writeFile('./README.md', generateMarkdown(inquirerAnswers)), function(err) {
//     if (err) return console.log(err);
// }


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((inquirerAnswers, data) => {
            console.log(inquirerAnswers)
        })
        .catch((err) => {
            console.log(err);
        })
}

// Function call to initialize app
init();
