// TODO: Include packages needed for this application
import { writeFile } from 'fs/promises';
import inquirer from 'inquirer';    
import colors from 'colors';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is the title of your project?",
        name: "title",
        type: "text"
    },
    {
        message: "Provide a description of your project.",
        name: "description",
        type: "textarea"
    },
    {
        message: "Provide the installation instructions for your project.",
        name: "installation",
        type: "textarea"
    },
    {
        message: "Describe the usage of your project.",
        name: "usage",
        type: "textarea"
    },
    {
        message: "What license is your project using?",
        name: "license",
        type: "list",
        choices: ["MIT", "GNU GPLv3", "Apache 2.0", "ISC", "None"]
    },
    {
        message: "How can others contribute to your project?",
        name: "contributing",
        type: "textarea"
    },
    {
        message: "Provide the tests for your project.",
        name: "tests",
        type: "textarea"
    },
];


// TODO: Create a function to write README file

async function writeToFile(fileName, data) {
    const { title, description, installation, usage, license, contributing, tests } = data;
    console.log(data);
 
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
    inquirer.prompt(questions).then((answers) => {
        // Write README file with the provided answers
        writeToFile('README.md', answers);
    }).catch((error) => {
        console.error('Error initializing app:', error);
    });
}

// Function call to initialize app
init();

