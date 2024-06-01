const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate to the React app
  await page.goto('http://localhost:3000');

  // Wait for the input elements to be rendered
  await page.waitForSelector('input[type="text"]');
  await page.waitForSelector('input[type="number"]');

  // Type into the input fields
  await page.type('input[type="text"]', 'yop');
  await page.type('input[type="number"]', '112221');

  // Click the submit button
  await page.click('button[type="submit"]');

  // Wait for a while to ensure the form submission completes
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Close the browser
  await browser.close();
})();
