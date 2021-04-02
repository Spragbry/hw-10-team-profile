import inquirer from 'inquirer'
import Engineer from "../lib/Engineer"


export const generateEngineer = (callback) => {
  return new Promise((resolve, reject) => {
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
        message: "what is your gitHub username?",
        default: ""
      },
      {
        type: "input",
        name: "question_4",
        message: "whats your id?",
        default: ""
      },
    ])
    .then(answers => {
      const name = answers["question_1"]
      const email = answers["question_2"]
      const gitHub = answers["question_3"]
      const id = answers["question_4"]
      const engineer = new Engineer(name, id, email, gitHub)
      callback(engineer)
      resolve(engineer)
    })
    .catch(error => {
      console.error("error", error)
      reject(error)
    });
  })
} 