import Employee from "./Employee"

class Manager extends Employee { 
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return "manager"
    }
    
}

export default Manager