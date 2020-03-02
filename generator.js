const fs = require("fs");

const generateReadMe = (response, followers, location, bioImage) => {
    return `# ${response.title}

    ![followers](https://img.shields.io/badge/Followers-${followers}-brightgreen)
    ![location](https://img.shields.io/badge/Location-${location}-blue)

    ${response.description}

    ***
    
    ## Table of Contents
    [Installation](#Installation)
    
    [Usage](#Usage)
    
    [Licensing](#Licensing)
    
    [Contributors](#Contributors)
    
    [Testing](#Testing)
    
    [Questions](#Questions)
    
    ***
    
    ## Installation
    ${response.install}
    
    
    ## Usage
    ${response.usage}
    
    
    ## Licensing
    ${response.license}
    
    
    ## Contributors
    ${response.contributors}
    
    
    ## Testing
    ${response.testing}
    
    
    ## Questions
    ${response.questions}
    
    
    ***
    
    ### Email: ${response.email}
    
    ![bioImg](${bioImage})
    
    `
}

module.exports = generateReadMe;
