import Manager from "../lib/Manager"

export const generateManager = () => { 
    inquire.prompt([
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
        message: "what is your office number?",
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
      const officeNumber = answers["question_3"]
      const idNum = answers["question_4"]
      const manager = new Manager(name, email, officeNumber, idNum)
      employees.push(manager)
    })
    .catch(error => {
      console.error("error", error)
    });
    } 