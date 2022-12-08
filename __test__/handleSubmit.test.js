import puppeteer from "puppeteer";
import { handleSubmit } from "../src/client/js/formHandler"

describe("Handle Submit Tests", () => {
    test("Check if Request is sent", async () => {
        // Handle Submit is tested in E2E test since it relies on (almost) only DOM Elements and contains an integrated function as well
        // Set up Browser Instance and receive from localhost
        const browserInstance = await puppeteer.launch({
            headless: true,
        });
        const page = await browserInstance.newPage();
        await page.goto('http://localhost:8081');
        // fill in form and submit
        const input = "I feel happy";
        const output = "AGREEMENT";
        await page.type("#name",input);
        await page.click("#submit");
        await new  Promise(r => setTimeout(r, 2000));
        // evaluate content on webpage
        const agreement = await page.$eval('#agreement', el => el.textContent);
        await expect(agreement).toBe(output);
    },10000);
});