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
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
    },
    {
        type: 'list',
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
    const licenseSection = {
        MIT: `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.`,
        Apache: ``,
        GPL: ``,
        BSD: ``,
        None: ``,
    }

    // Generate the README file
    const readmeContent = `
# ${answers.title}

${licenseBadges[answers.license]}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${licenseSection[answers.license]}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions, please contact <a href = "https://github.com/${answers.githubUsername}">Github Profile</a> <a href="mailto:${answers.emailAddress}">Email Me</a>
`;

    // Write the content to README.md
    fs.writeFile('README.md', readmeContent, (err) => {
        if (err) throw err;
        console.log('README.md has been successfully generated!');
    });
});