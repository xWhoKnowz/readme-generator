// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  console.log(license);  
  // TODO: Create a conditional that generates a badge based on the chosen license
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }
    // TODO: Create a conditional that generates a url link based on the chosen license

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README

function generateMarkdown({ title, description, install, usage, credits, license, badges, features, collabs, alt, screenshot }) {
  return `
# ${title}
${renderLicenseBadge(license)}
## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [Contributing](#contributing)
- [Screenshot](#screenshot)

## Installation

${install}

## Usage

${usage}


## Credits

${credits}

## License

${license}

---

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

${features}

## How to Contribute

${collabs} 

The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard.

## Webpage Screenshot
    
![${alt}](${screenshot})`;
}

module.exports = generateMarkdown;
