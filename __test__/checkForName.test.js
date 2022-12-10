import puppeteer from "puppeteer";
import { checkForName } from "../src/client/js/nameChecker"

window.alert = jest.fn()

describe("Check for Name Tests", () => {
    test("Check if Picard is handled correctly", async () => {
        window.alert.mockClear();
        const validString = checkForName("Picard");
        expect(window.alert).toHaveBeenCalled();
        expect(validString).toBeTruthy();
    },10000);
    
    test("Check if Kevin is handled correctly", async () => {
        window.alert.mockClear();
        const validString = checkForName("Kevin");
        expect(window.alert).not.toHaveBeenCalled();
        expect(validString).toBeTruthy();
    },10000);

    test("Check if empty string is handled correctly", async () => {
        window.alert.mockClear();
        const validString = checkForName("");
        expect(window.alert).toHaveBeenCalled();
        expect(validString).not.toBeTruthy();
    },10000);
});