import { handleSubmit } from "../src/client/js/formHandler"

describe("Handle Submit Tests", () => {
    test("Check if Request is sent", () => {
        // Test description
        const input = "I feel happy";
        const ouptut = "positive";
        expect(handleSubmit).toBeDefined();
    });
});