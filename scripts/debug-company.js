const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const errors = [];
  const failedRequests = [];

  page.on("pageerror", (err) => errors.push({ type: "pageerror", message: err.message, stack: err.stack }));
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      errors.push({ type: "console", message: msg.text() });
    }
  });
  page.on("response", (response) => {
    if (response.status() >= 400) {
      failedRequests.push({ url: response.url(), status: response.status() });
    }
  });

  await page.goto("http://localhost:3000/company", { waitUntil: "networkidle" });
  await page.waitForTimeout(3000);

  const screenshotPath = "/Users/Oct/Project/elinWeb/scripts/company-screenshot.png";
  await page.screenshot({ path: screenshotPath, fullPage: true });

  console.log("Failed requests:", JSON.stringify(failedRequests, null, 2));
  console.log("Errors:", JSON.stringify(errors, null, 2));
  console.log("Screenshot:", screenshotPath);

  // Check if body has content
  const bodyText = await page.evaluate(() => document.body.innerText.trim().slice(0, 200));
  console.log("Body text preview:", bodyText);

  await browser.close();
})();
