// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//should render the liscence link adn badge//
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![License](https://img.shields.io/badge/License-${license}-yellowgreen.svg)`;
  }
  return "";
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n * [License](#license) \n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    This project is licensed under the ${license} license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## title 
  ${data.projectname}
  ${renderLicenseBadge(data.license)}

  ### Table of contents
  ## Description
  ## Installation
  ## Dependencies 
  ## Questions


  ## Description 
  ${data.Projectdescription}
  ${data.contributors}
  ${data.Usage}
  [Test]${data.test}

  ## Installation
  ${data.installation}
  ${renderLicenseLink(data.license)}
  ${data.Usage}


 ## Dependencies
  [Dependencies]${data.dependencies}

  ## Questions
  ${data.githubusername}(https://github.com/${data.githubprofile}/)
 
  

 This project is licensed under 

 ${renderLicenseSection(data.license)}


   Contact me at ${data.Email}
`;
}

module.exports = generateMarkdown;
