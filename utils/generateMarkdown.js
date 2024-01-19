// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  // TODO: Create a conditional that generates a badge based on the chosen license
  if (license === `Apache License 2.0`) {
    return `https://img.shields.io/badge/License-Apache_2.0-yellow`
  };
  if (license === `BSD 3 Clause License`) {
    return `https://img.shields.io/badge/License-BSD_3_Clause-blue`
  };
  if (license === `GNU General Public License (GPL) v3`) {
    return `https://img.shields.io/badge/License-GNU_General_Public_(GPL)_v3-green`
  };
  if (license === `MIT`) {
    return `https://img.shields.io/badge/License-MIT-red`
  };
  if (license === `Mozilla Public License 2.0`) {
    return `https://img.shields.io/badge/License-Mozilla_Public_2.0-purple`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  // TODO: Create a conditional that generates a url link based on the chosen license
  if (license === `Apache License 2.0`) {
    return `https://choosealicense.com/licenses/apache-2.0/`
  };
  if (license === `BSD 3 Clause License`) {
    return `https://choosealicense.com/licenses/bsd-3-clause/`
  };
  if (license === `GNU General Public License (GPL) v3`) {
    return `https://choosealicense.com/licenses/gpl-3.0/`
  };
  if (license === `MIT`) {
    return `https://choosealicense.com/licenses/mit/`
  };
  if (license === `Mozilla Public License 2.0`) {
    return `https://choosealicense.com/licenses/mpl-2.0/`
  }
}

// TODO: Create a function to generate markdown for README

function generateMarkdown({ title, description, install, usage, credits, license, badges, features, collabs, tests, github, link, email, alt, screenshot }) {
  return `
# ${title}
[![${license}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)
- [Screenshot](#screenshot)

## Installation

${install}

## Usage

${usage}


## Credits

${credits}

## License

This project uses the [${license}](${renderLicenseLink(license)}) License.

---

## Features

${features}

## Contributions

${collabs} 

Also see [Contributor Covenant](https://www.contributor-covenant.org/).

## Tests

${tests}

## Questions

If you have any questions or concerns reach out to me via one of the following: 

GitHub: [${github}](${link}) 
Email: ${email}.

## Webpage Screenshot
    
![${alt}](${screenshot})`;
}

module.exports = generateMarkdown;
