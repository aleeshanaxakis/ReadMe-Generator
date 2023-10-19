const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.createPromptModule([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a descrption of your project:',
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'Provide a table of contents:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What is the project license?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide information about tests:',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'How can users reach out with questions?',
    },
])
.then((answers) => {
    // Generate the README file
});