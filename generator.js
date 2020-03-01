const generateReadMe = (response) => {


let newReadMe = `![last commit](https://img.shields.io/badge/Updated-${dateoflastupdate}-brightgreen)
    # ${title}
    ${description}
    ## Table of Contents
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [Licensing](#Licensing)
    - [Contribution](#Contribution)
    - [Testing](#Testing)
    - [Questions](#Questions)
    ## Installation 
    ${installationInstruc}
    ## Usage
    ${usage}
    ## Licensing
    ${license}
    ## Contribution
    ${contributors}
    ## Testing
    ${testing}
    ## Questions
    Email: ${email}
    ![alt txt](${bioimg})`

fs.writeFile("README.txt", newReadMe, function(err){
    if (err) {
        throw err;
    } else {
        console.log("ReadMe successfully created!");
    }
});
}

module.exports = generateReadMe;