const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");

const generator = require("./generator");

inquirer
    .prompt([{
        type: "input",
        message: "GitHub Username?",
        name: "name"
    },{
        type: "input",
        message: "Project Title?",
        name: "title"
    },{
        type: "input",
        message: "Project Description?",
        name: "description"
    },{
        type: "input",
        message: "Installation Instructions?",
        name: "install"
    },{
        type: "input",
        message: "Project Usage?",
        name: "usage"
    },{
        type: "list",
        choices: ["GNU AGPLv3", "Mozilla Public License 2.0", "Apache License 2.0","MIT License", "No License"],
        message: "Any Licensing?",
        name: "license"
    },{
        type: "input",
        message: "Project Contributors?",
        name: "contributors"
    },{
        type: "input",
        message: "Testing?",
        name: "testing"
    },{
        type: "input",
        message: "Questions?",
        name: "questions"
    },{
        type: "input",
        message: "Email?",
        name: "email"
    }]).then(function(response){
        const queryURL = `https://api.github.com/users/${response.name}`;
        let inqResponse = response;

        axios.get(queryURL).then(function(data){
            let lastUpdate = data.data.updated_at
            let bioImg = data.data.avatar_url
            let newReadMe = generator(inqResponse, lastUpdate, bioImg);
            fs.writeFile("README.md", newReadMe, function(err){
                if (err) {
                    throw err;
                } else {
                    console.log("ReadMe successfully created!");
                }
            });
        });


    });
