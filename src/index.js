const fs = require('fs')
var inquirer = require('inquirer')
import Employee from "../lib/Employee"
import Engineer from "../lib/Engineer"
import Manager from "../lib/Manager"
import Intern from "../lib/Intern"
import {generateEngineer} from "../utils/EngineerUtils"
let employees = []


/*inquire.prompt([
    {
        type: "input",
        name: "question_1",
        message: "what is the title of your project?",
        default: ""
    },
    
])
.then(answers => {
  

})
.catch(error => {
  console.error("error", error)
});*/