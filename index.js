const inquirer = require("inquirer");
const axios = require("axios");
// const fs = require("fs");

// const generator = require("./generator");

inquirer
    .prompt({
        type: "input",
        message: "GitHub username?",
        name: "name"
    }).then(function({name}){
        const queryURL = `https://api.github.com/users/${name}`;

        axios.get(queryURL).then(function(response){
            console.log(response);
        });

    });
