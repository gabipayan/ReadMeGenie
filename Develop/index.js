// TODO: Include packages needed for this application
import { writeFile } from 'fs/promises';
import inquirer from 'inquirer';    
import colors from 'colors';
import fs from 'fs';
//import ListPrompt from 'inquirer/lib/prompts/list';

// TODO: Create an array of questions for user input
const questions = [
    {
        question: "What is the title of your project?",
        type: "text"
    },
    {
        question: "Provide a description of your project.",
        type: "textarea"
    },
    {
        question: "Provide the installation instructions for your project.",
        type: "textarea"
    },
    {
        question: "Describe the usage of your project.",
        type: "textarea"
    },
    {
        question: "What license is your project using?",
        type: "list",
        choices: ["MIT", "GNU GPLv3", "Apache 2.0", "ISC", "None"]
    },
    {
        question: "How can others contribute to your project?",
        type: "textarea"
    },
    {
        question: "Provide the tests for your project.",
        type: "textarea"
    },
    {
        question: "Any additional questions?", // I don't know yet what means with questions
        type: "textarea"
    }
];

console.log(questions);

// TODO: Create a function to write README file
// const fs = require('fs');

async function writeToFile(fileName, data) {
    const { title, description, installation, usage, license, contributing, tests, questions } = data;
 
    const readmeContent = `
# ${title}

## Description
${description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contributing
${contributing}

## Tests
${tests}

## Questions
${questions}
`;

    fs.writeFile(fileName, readmeContent, (err) => {
        if (err) {
            return console.error(`Error writing to file: ${err.message}`);
        }
        console.log('README file has been created successfully!');
    });
}



// TODO: Create a function to initialize app
async function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project.'
        },
        {
            type: 'input',
            name: 'tableOfContents',
            message: 'List the table of contents for your project.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide the installation instructions for your project.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe the usage of your project.'
        },
        {
            type: 'input',
            name: 'license',
            message: 'What license is your project using?'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How can others contribute to your project?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide the tests for your project.'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Any additional questions or comments?'
        }
    ]).then((answers) => {
        // Write README file with the provided answers
        writeToFile('README.md', answers);
    }).catch((error) => {
        console.error('Error initializing app:', error);
    });
}

// Function call to initialize app
init();

// To create a README file:
// const data = {
//     title: "My Project",
//     description: "This is a description of my project.",
//     tableOfContents: "- [Description](#description)\n- [Installation](#installation)\n- [Usage](#usage)\n- [License](#license)\n- [Contributing](#contributing)\n- [Tests](#tests)\n- [Questions](#questions)",
//     installation: "Here are the installation instructions.",
//     usage: "Here is how you use the project.",
//     license: "MIT",
//     contributing: "Here is how you can contribute to the project.",
//     tests: "Here are the tests for the project.",
//     questions: "If you have any questions, you can contact me at [email@example.com](mailto:email@example.com)."
// };

// writeToFile('README.md', data);