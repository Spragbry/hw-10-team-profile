import {generateEmployee} from "./utils/GenerateUtils"
let employees = []

generateEmployee((employee) => {
  employees.push(employee)
  console.log("employees Created:", employees)
})

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