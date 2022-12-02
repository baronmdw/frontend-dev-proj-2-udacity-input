import { handleSubmit } from "../src/client/js/formHandler"

describe("Handle Submit Tests", () => {
    test("Check if Request is sent", () => {
        // Test description
        document.body.innerHMTL = 
        '<div id="agreement"></div>'+
        '<div id="confidence"></div>'+
        '<div id="irony"></div>'+
        '<div id="subjectivity"></div>';

        const input = "I feel happy";
        const ouptut = "positive";
        expect(handleSubmit).toBeDefined();
    });
});