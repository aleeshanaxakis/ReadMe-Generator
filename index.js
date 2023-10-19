import inquirer from 'inquirer';
import fs from 'fs';

inquirer
.prompt([
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
        name: 'githubUsername',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'What is your email address?',
    }
])
.then((answers) => {
    // Generate the README file
    const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
${answers.tableOfContents}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions, please contact [${answers.githubUsername}](mailto:${answers.emailAddress}).
`;

    // Write the content to README.md
    fs.writeFile('README.md', readmeContent, (err) => {
        if (err) throw err;
        console.log('README.md has been successfully generated!');
    });
});