// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license && license !== 'None') {
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://choosealicense.com/licenses/${license}/)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license && license !== 'None') {
    return `This application is covered under the [${license}](https://choosealicense.com/licenses/${license}/) license.`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license && license !== 'None') {
    return `## License

${renderLicenseBadge(license)}

${renderLicenseLink(license)}
`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Badges](#badges)
  [Features](#features)

  ## Installation

  ## Usage

  ## Credits

  ## License

  ## Badges

  ## Features
`;
}

module.exports = generateMarkdown;
