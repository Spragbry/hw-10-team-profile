import {generateEmployees} from "./utils/GenerateUtils"
import fs from "fs"
import Employee from './lib/Employee'
import Intern from './lib/Intern'
import Manager from './lib/Manager'
import Engineer from './lib/Engineer'

let employees = []


const renderStart = () => {
  return "<html><head></head><body><div style='display: flex; flex-direction: row;'>"
}

const renderEnd = () => {
  return "</div></body></html>"
}

const renderIntern = (employee) => {
  return `<div style="margin: 10; padding: 20; background-color: #E9A175;">
      <h1>${employee.getName()}</h1>
      <h1>${employee.getRole()}</h1>
      <h1>${employee.getEmail()}</h1>
      <h1>ID: ${employee.getId()}</h1>
      <h1>School: ${employee.getSchool()}</h1>
    </div>`
}

const renderEngineer = (employee) => {
  return `<div style="margin: 10; padding: 20; background-color: #E9A175;">
      <h1>${employee.getName()}</h1>
      <h1>${employee.getRole()}</h1>
      <h1>${employee.getEmail()}</h1>
      <h1>ID: ${employee.getId()}</h1>
      <h1>GitHub: ${employee.getGitHub()}</h1>
    </div>`
}

const renderManager = (employee) => {
  return `<div style="margin: 10; padding: 20; background-color: #E9A175;">
      <h1>${employee.getName()}</h1>
      <h1>${employee.getRole()}</h1>
      <h1>${employee.getEmail()}</h1>
      <h1>ID: ${employee.getId()}</h1>
      <h1>Office Number: ${employee.getOfficeNumber()}</h1>
    </div>`
}

const render = () => {
  let content = renderStart()
  employees.forEach((employee) => {
    if(employee instanceof Manager) {
      content += renderManager(employee)
    } else if(employee instanceof Engineer) {
      content += renderEngineer(employee)
    } else {
      content += renderIntern(employee)
    }
  })
  content += renderEnd()
  fs.writeFile("dist/index.html", content, (err) => {
    if(err) {
      console.log("error")
    }
  })
}

generateEmployees((employee) => {
  employees.push(employee)
  render()
})

