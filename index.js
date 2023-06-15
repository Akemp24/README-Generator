// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message:'What is the title?',
        name:'READMe Title',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log('Did not make README', err);
        } else {
            console.log('README successfully made')
        };
    });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
