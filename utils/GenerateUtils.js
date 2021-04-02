import inquirer from 'inquirer'
import {generateEngineer} from "../utils/EngineerUtils"
import {generateIntern} from "../utils/InternUtils"
import {generateManager} from "../utils/ManagerUtils"

const generateEmployeeFromType = async (employeeType, callback) => {
  let employee = null
  if (employeeType === "engineer") {
    await generateEngineer(callback)
  } else if (employeeType === "manager") {
    await generateManager(callback)
  } else {
    await generateIntern(callback)
  }
}

export const generateEmployeeRecursive = async (index, count, callback) => { 
  if(index > count - 1) {
    return
  }
  inquirer.prompt([
    {
        type: "list",
        name: "question_1",
        message: "what is your occupation?",
        default: "",
        choices: ["engineer", "manager", "intern"]
    },
  ])
  .then(async (answers) => {
    const employeeType = answers["question_1"]
    let employee = await generateEmployeeFromType(employeeType, callback)
    generateEmployeeRecursive(index + 1, count, callback)
  })
  .catch(error => {
    console.error("error", error)
  })
}

export const generateEmployees = async (callback) => { 
  let numEmployees = 5
    inquirer.prompt([
      {
          type: "input",
          name: "question_1",
          message: "How many employees do you have?",
          default: "",
      }
    ])
    .then(answers => {
      numEmployees = parseFloat(answers["question_1"])
      generateEmployeeRecursive(0, numEmployees, callback)
    })
    .catch(error => {
      console.error("error", error)
    })
} 