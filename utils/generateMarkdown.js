// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//should render the liscence link adn badge//
function renderLicenseBadge(license) {
  if (license == "Apache") {
    badge =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    console.log(badge);
  } else if (license == "MIT") {
    badge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    console.log(badge);
  } else if (license == "GNU") {
    badge =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    console.log(badge);
  } else {
    badge = " ";
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectname}
  
  ## Description 
  ${data.Projectdescription}
  ## Installation
  ${data.installation}
  ${renderLicenseLink(data.license)}

  ## Table of contents
  [Dependencies]${data.dependencies}

  ## Contributors
  ${data.contributors}

  ## 
  ${data.Projectdescription}

  ## Github URL 
 [${data.githubusername}](https://github.com/${data.githubprofile}/)


 This project is licensed under ${data.license}

   ${renderLicenseBadge(data.license)}
   ${renderLicenseSection(data.license)}
   ${renderLicenseLink(data.license)}


   ## Test
  [Test]${data.test}
  
   Contact me at ${data.Email}
`;
}

module.exports = generateMarkdown;

// ## Table of Contents 🗒
// * [Installations](#dependencies)
// * [Usage](#usage)
// ${renderLink(data.license)}
// * [Contributors](#contributors)
// * [Test](#test)
// ## Installations (Dependencies) 💻
// To install dependencies, run these commands:
// \`\`\`
// ${data.dependencies}
// \`\`\`
// ## Usage 🏆
// ${data.usage}
// ${renderSection(data.license)}
// ## Contributors 😃
// ${data.contributors}
// Contact me at ${data.email}
// ## Tests 🧪
// To run tests, run these commands:
// \`\`\`
// ${data.test}
// \`\`\`
