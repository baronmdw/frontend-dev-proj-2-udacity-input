import puppeteer from "puppeteer";
import { checkForName } from "../src/client/js/nameChecker"

window.alert = jest.fn()

describe("Check for Name Tests", () => {
    test("Check if Picard is handled correctly", async () => {
        window.alert.mockClear();
        checkForName("Picard");
        expect(window.alert).toHaveBeenCalled();
    },10000);
    
    test("Check if Kevin is handled correctly", async () => {
        window.alert.mockClear();
        checkForName("Kevin");
        expect(window.alert).not.toHaveBeenCalled();
    },10000);
});