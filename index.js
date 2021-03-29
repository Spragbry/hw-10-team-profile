const fs = require('fs');
var inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    } 
    
    getName() {
        return this.name
    }

    getEmail() {
        return this.email
    }

    getId() {
        return this.id
    }

    getRole() {
        return "employee"
    }
}

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email)
        this.gitHub = gitHub
    }

    getGitHub() {
        return this.gitHub
    }
}
//let employee = new Employee("Bryce", 1, "spragbry@gmail.com") 
//console.log("name:", engineer.getName())

inquire.prompt([
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
});