const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

const questions = () => {
    return inquirer.prompt([
        {
            type:"input",
            message:"What is the title of the Application?",
            name:"title",
            validate: (value) => {if(value){return true} else {return "Please provide the Application Title."}},
        },
        {
            type:"input",
            message:"Please describe the Application",
            name:"description",
            validate: (value) => {if(value){return true} else {return "Please provide a description of the Application."}},
        },
        {
            type:"input",
            message:"How do you install this application?",
            name:"installation",
            validate: (value) => {if(value){return true} else {return "Please provide installaetion instructions for the Application."}},
        },
        {
            type:"input",
            message: "Please explaine how this app is to be used?",
            name:"usage",
            validate: (value) => {if(value){return true} else {return "Please explain the use of the Application."}},
        },
        {
            type:"list",
            message: "Please pick which license was used.",
            name:"license",
            choices:['Apache License 2.0','GNU General Public License v3.0','MIT License','Mozilla Public License 2.0', 'NONE'],
                       validate: (value) => {if(value){return true} else {return "Please select 1 to continue"}},
        },
        {
            type:"input",
            message: "Who contributed to this Application?",
            name:"contributions",
            validate: (value) => {if(value){return true} else {return "Please explain the use of the Application."}},
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your Github username",
            validate: (value) => {if(value){return true} else {return "Please enter your Github username."}},
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email",
            validate: (value) => {if(value){return true} else {return "Please enter your email address."}},
        }    
])};

// Function to write README file
function writeToFile(answers){
        fs.writeToFile("README.md", answers, (err) => err ? console.error (err) : console.log("Success!")
)};

function init(){
    return questions()
     .then(answers => {
        return writeToFile(answers)
})};  
// Function call to initialize app
init();
