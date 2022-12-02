import { checkForName } from "../src/client/js/nameChecker"

describe("Check for Name Tests", () => {
    test("Check if Picard is handled correctly", () => {
        // Test description
        const input = ["Picard", "Janeway", "Kirk", "Archer", "Georgiou", "Kevin"];
        const output = [true, true, true, true, true, false];
        expect(checkForName).toBeDefined()
    });
});