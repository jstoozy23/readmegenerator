// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "NONE") {
        return "";
  }  else { 
        return `![License](https://img.shields.io/badge/License-${license}-<blue>)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "NONE") {
      return "";
    } else {
      return `* [License](*license) `
    }
};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "NONE") {
    return "";
  } else {
    return `## License
    
    App is covered under the ${license} license.`
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributions](#contributions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributions
  ${data.contributions}
  View more of my work at
  [${data.github}](https://github.com/${data.github}/)
  Email me with any questions here
  ${data.email}`;
};

module.exports = generateMarkdown;
