const { chromium } = require("playwright");
const path = require("path");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const htmlPath = path.resolve(__dirname, "brochure.html");
  await page.goto(`file://${htmlPath}`, { waitUntil: "networkidle" });

  await page.pdf({
    path: path.resolve(__dirname, "../public/艺林工业供应链-企业宣传册.pdf"),
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
  });

  await browser.close();
  console.log("PDF generated: public/艺林工业供应链-企业宣传册.pdf");
})();
