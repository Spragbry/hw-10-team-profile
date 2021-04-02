import Manager from "../lib/Manager"


it("manager",() => {
    const m = new Manager("name", 1, "spragbry93@gmail.com", 1)
    expect(m.getName() === "name").toBe(true)
    expect(m.getId() === 1).toBe(true)
    expect(m.getEmail() === "spragbry93@gmail.com").toBe(true)
    expect(m.getOfficeNumber() === 1).toBe(true)
})