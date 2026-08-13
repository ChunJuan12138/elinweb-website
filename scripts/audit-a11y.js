const { chromium } = require("playwright");
const AxeBuilder = require("@axe-core/playwright").default;

const routes = [
  "/",
  "/company",
  "/business",
  "/ecosystem",
  "/contact",
  "/advantages",
  "/pricing",
  "/history",
  "/partners",
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const results = [];

  for (const route of routes) {
    const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    const page = await context.newPage();

    try {
      await page.goto(`http://localhost:3000${route}`, { waitUntil: "networkidle" });
      await page.waitForTimeout(2000);

      const accessibilityScan = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa"])
        .analyze();

      results.push({
        route,
        violations: accessibilityScan.violations,
        count: accessibilityScan.violations.length,
      });
    } catch (err) {
      results.push({ route, error: err.message });
    } finally {
      await page.close();
      await context.close();
    }
  }

  await browser.close();

  console.log(JSON.stringify(results, null, 2));
})();
