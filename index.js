// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message:'What is the title?',
        name:'title',
    },
    {
        type:'input',
        message:'Please type your description.',
        name:'description',
    },
    {
        type:'input',
        message:'What are the installation instructions?',
        name:'installation',
    },
    {
        type:'input',
        message:'What is the usage of the app?',
        name:'usage',
    },
    {
        type:'list',
        message:'Pick a option for the license?',
        choices:['MIT', 'None'],
        name:'license',
    },
    {
        type:'input',
        message:'What are some contributions?',
        name:'contributions',
    },
    {
        type:'input',
        message:'What is your github profile link?',
        name:'github',
    },
    {
        type:'input',
        message:'What is your email?',
        name:'email',
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
function init() {
    inquirer.prompt(questions).then((data) => {
        const markdown = generateMarkdown(data);
        writeToFile('README.md', markdown);
    }).catch((error) => {
        console.log('Cannot initialize application', error);
    });
}

// Function call to initialize app
init();
