const fs = require("fs");

const generateReadMe = (response, followers, bioImage) => {
    return `![Followers](https://img.shields.io/badge/Followers-${followers}-brightgreen)
    ![Location](https://img.shields.io/badge/Location-${location}-blue)
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
