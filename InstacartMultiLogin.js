const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    // Read JSON data
    const jsonData = JSON.parse(fs.readFileSync('Accounts.json', 'utf8'));

    // Launch a browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to your login page
    await page.goto('https://www.instacart.com/login');

    // Assuming jsonData is an array of account objects
    for (const account of jsonData) {
        // Fill in the login form and submit
        await page.type('#email-input', account.Email); // Replace with your input field's selector
        await page.type('#password-input', account.Password); // Replace with your input field's selector
        await page.click('#login-button'); // Replace with your login button's selector

        // Add any additional logic (like checking for successful login)

        // For demonstration, wait a bit before the next iteration
        await page.waitForTimeout(1000);
    }

    // Close the browser
    await browser.close();
})();
