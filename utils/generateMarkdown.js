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
    return `https://www.apache.org/licenses/LICENSE-2.0`
  };
  if (license === `BSD 3 Clause License`) {
    return `https://opensource.org/license/bsd-3-clause/`
  };
  if (license === `GNU General Public License (GPL) v3`) {
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`
  };
  if (license === `MIT`) {
    return `https://opensource.org/license/mit/`
  };
  if (license === `Mozilla Public License 2.0`) {
    return `https://www.mozilla.org/en-US/MPL/2.0/`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README

function generateMarkdown({ title, description, install, usage, credits, license, badges, features, collabs, alt, screenshot }) {
  return `
# ${title}

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

[![${license}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})

---

## Features

${features}

## How to Contribute

${collabs} 

See [Contributor Covenant](https://www.contributor-covenant.org/).

## Webpage Screenshot
    
![${alt}](${screenshot})`;
}

module.exports = generateMarkdown;
