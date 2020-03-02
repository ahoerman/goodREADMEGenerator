const fs = require("fs");

const generateReadMe = (response, followers, location, bioImage) => {
    return `![followers](https://img.shields.io/badge/Followers-${followers}-brightgreen)
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
    Email: ${response.email}
    ![alt txt](${bioImage})`
}

module.exports = generateReadMe;
