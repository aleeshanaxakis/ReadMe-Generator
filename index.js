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
        message: 'Provide a description of your project:',
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
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
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

    // License badge and notice mapping
    const licenseBadges = {
        MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        Apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        GPL: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
        BSD: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
        None: 'This project is not licensed.',
      };

    // Create anchor tags for Table of Contents
    const tableOfContents = answers.tableOfContents
      .split(',')
      .map((section) => {
        const sectionTitle = section.trim();
        const sectionId = sectionTitle.toLowerCase().replace(/\s+/g, '-');
        return `[${sectionTitle}](#${sectionId})`;
      })
      .join('\n');

    // Generate the README file
    const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
${tableOfContents}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${licenseBadges[answers.license]}

${licenseBadges[answers.license] !== 'This project is not licensed.' ? `This project is licensed under the ${answers.license} license.` : 'This project is not licensed.'}

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