import { expect, it } from "@jest/globals"
import Employee from "../lib/Employee"

it("employee",() => {
    const e = new Employee("name", 1, "spragbry93@gmail.com")
    expect(e.getName() === "name").toBe(true)
    expect(e.getId() === 1).toBe(true)
    expect(e.getEmail() === "spragbry93@gmail.com").toBe(true)
    expect(e.getRole() === "employee").toBe(true)
})

