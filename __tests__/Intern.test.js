import Intern from "../lib/Intern"

it("intern",() => {
    const e = new Intern("name", 1, "spragbry93@gmail.com", "MSU")
    expect(e.getName() === "name").toBe(true)
    expect(e.getId() === 1).toBe(true)
    expect(e.getEmail() === "spragbry93@gmail.com").toBe(true)
    expect(e.getSchool() === "MSU").toBe(true)
})