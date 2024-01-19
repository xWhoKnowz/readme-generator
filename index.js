// TODO: Include packages needed for this application
const fs = require(`fs`)
const inquirer = require(`inquirer`)
const generateMarkdown = require(`./utils/generateMarkdown`)

// TODO: Create an array of questions for user input
// TODO pass questions array of objects into inquirer .prompt() method.

const userPrompts = [
    {
        type: `input`,
        message: `What is your project's name?`,
        name: `title`,
    },
    {
        type: `input`,
        message: `Please write your project's description.`,
        name: `description`,
    },
    {
        type: `input`,
        message: `What are the installation requirements for your application? Enter 'N/A' if there are none.`,
        name: `install`,
    },
    {
        type: `input`,
        message: `What does a user need to know about using your application?`,
        name: `usage`,
    },
    {
        type: `input`,
        message: `Who would you like to credit for this project? Enter 'N/A' if you had no collaborators.`,
        name: `credits`,
    },
    {
        type: `list`,
        message: `Pick the license you wish to use for your project.`,
        choices: [`Apache License 2.0`,`BSD 3 Clause License`, `GNU General Public License (GPL) v3` , `MIT`, `Mozilla Public License 2.0`],
        name: `license`,
    },
    {
        type: `input`,
        message: `What, if any, were the prominent features of this project? Enter N/A if there are none.`,
        name: `features`,
    },
    {
        type: `input`,
        message: `What does a user need to know about collaborating on this project?`,
        name: `collabs`,
    },
    {
        type: `input`,
        message: `How would a collaborator test this application?`,
        name: `tests`,
    },
    {
        type: `input`,
        message: `What is your GitHub username?`,
        name: `github`,
    },
    {
        type: `input`,
        message: `What is your GitHub account's URL?`,
        name: `link`,
    },
    {
        type: `input`,
        message: `What is your email address?`,
        name: `email`,
    },
    {
        type: `input`,
        message: `What is the alt text for the project screenshot?`,
        name: `alt`,
    },
    {
        type: `input`,
        message: `What is the file path for the project screenshot?`,
        name: `screenshot`,
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer
        .prompt(userPrompts)
        .then((readmeData) => {

            const readmeContent = generateMarkdown(readmeData)

            fs.writeFile(`readme.md`, readmeContent, (err) =>
                err ? console.log(err) : console.log(`Success!`));

        })
}
// TODO: Create a function to initialize app
function init() {
    writeToFile()
}

// Function call to initialize app
init();