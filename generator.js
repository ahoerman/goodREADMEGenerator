const fs = require("fs");

const generateReadMe = (response, followers, location, bioImage) => {
    return `# ${response.title}
    ![Followers](https://img.shields.io/badge/Followers-${followers}-brightgreen)
        ![Location](https://img.shields.io/badge/Location-${location}-blue)
        <h1>${response.title}</h1>
       <br>
        ${response.description}
        <br>
        <h2>Table of Contents</h2>
        [Installation](#Installation)<br>
        [Usage](#Usage)<br>
        [Licensing](#Licensing)<br>
        [Contributors](#Contributors)<br>
        [Testing](#Testing)<br>
        [Questions](#Questions)<br>
        <h2>Installation</h2>
        ${response.install}
        <h2>Usage</h2>
        ${response.usage}
        <h2>Licensing</h2>
        ${response.license}
        <h2>Contributors</h2>
        ${response.contributors}
        <h2>Testing</h2>
        ${response.testing}
        <h2>Questions</h2>
        ${response.questions}
        <h3>Email: ${response.email}</h3>
        <img src="${bioImage}">`
}

module.exports = generateReadMe;
