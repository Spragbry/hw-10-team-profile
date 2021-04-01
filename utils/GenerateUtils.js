import inquirer from 'inquirer'
import {generateEngineer} from "../utils/EngineerUtils"
import {generateIntern} from "../utils/InternUtils"
import {generateManager} from "../utils/ManagerUtils"

export const generateEmployee = (callback) => { 
    inquirer.prompt([
      {
          type: "list",
          name: "question_1",
          message: "what is your name?",
          default: "",
          choices: ["engineer", "manager", "intern"]
      },
      
    ])
    .then(answers => {
      const employeeType = answers["question_1"]
      let employee = null
      if (employeeType === "engineer") {
        generateEngineer(callback)
      } else if (employeeType === "manager") {
        generateManager(callback)
      } else {
        generateIntern(callback)
      }
    })
    .catch(error => {
      console.error("error", error)
    });
    } 