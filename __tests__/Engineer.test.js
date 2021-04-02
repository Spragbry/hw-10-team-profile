import { expect, it } from "@jest/globals"
import Engineer from "../lib/Engineer"


it("engineer",() => {
    const e = new Engineer("name", 1, "spragbry93@gmail.com", "spragbry")
    expect(e.getName() === "name").toBe(true)
    expect(e.getId() === 1).toBe(true)
    expect(e.getEmail() === "spragbry93@gmail.com").toBe(true)
    expect(e.getGitHub() === "spragbry").toBe(true)
})

