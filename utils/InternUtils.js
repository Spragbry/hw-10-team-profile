import inquirer from 'inquirer'
import Intern from "../lib/Intern"


export const generateIntern = (callback) => { 
    inquirer.prompt([
      {
          type: "input",
          name: "question_1",
          message: "what is your name?",
          default: ""
      },
      {
        type: "input",
        name: "question_2",
        message: "whats your email?",
        default: ""
      },
      {
        type: "input",
        name: "question_3",
        message: "what school did you attend?",
        default: ""
      },
      {
        type: "input",
        name: "question_4",
        message: "what is your ID number?",
        default: ""
      },
    ])
    .then(answers => {
      const name = answers["question_1"]
      const email = answers["question_2"]
      const school = answers["question_3"]
      const idNum = answers["question_4"]
      const intern = new Intern(name, email, school, idNum)
      callback(intern)
    })
    .catch(error => {
      console.error("error", error)
    });
    } 