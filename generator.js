const fs = require("fs");

const generateReadMe = (response, lastUpdate, bioImage) => {
    return `![last commit](https://img.shields.io/badge/Updated-${lastUpdate}-brightgreen)
    # ${response.title}
    ${response.description}
    ## Table of Contents
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [Licensing](#Licensing)
    - [Contribution](#Contribution)
    - [Testing](#Testing)
    - [Questions](#Questions)
    ## Installation 
    ${response.install}
    ## Usage
    ${response.usage}
    ## Licensing
    ${response.license}
    ## Contribution
    ${response.contributors}
    ## Testing
    ${response.testing}
    ## Questions
    ${response.questions}
    Email: ${response.email}
    ![alt txt](${bioImage}){:height="50px" width="50px"}`
}

module.exports = generateReadMe;
