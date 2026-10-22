// Exports every CV variant to PDF from a running server.
//   yarn dev            (or yarn build && yarn start)
//   yarn cv:export      -> public/ PDFs for the site + cv-exports/ for applications
// CV_URL picks another server, CHROME_PATH another browser.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { chromium } from "playwright-core";

const base = process.env.CV_URL ?? "http://localhost:3000";
const chrome =
  process.env.CHROME_PATH ??
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

// the variant the site links to; the others go to cv-exports/ only
const siteVariant = "product";
const siteFiles = {
  en: "public/Abdulhamid-Afolabi-CV.pdf",
  fr: "public/Abdulhamid-Afolabi-CV-FR.pdf"
};

const variants = [
  ...readFileSync("constants/cv.ts", "utf8").matchAll(/^ {2}(\w+): \{$/gm)
].map(match => match[1]);
const locales = Object.keys(siteFiles);

const log = line => process.stdout.write(`${line}\n`);
const pageCount = pdf =>
  (pdf.toString("latin1").match(/\/Type\s*\/Page[^s]/g) ?? []).length;

if (!existsSync(chrome)) {
  log(`Chrome not found at ${chrome}. Set CHROME_PATH.`);
  process.exit(1);
}

mkdirSync("cv-exports", { recursive: true });
const browser = await chromium.launch({ executablePath: chrome });

for (const locale of locales) {
  // the site reads the language from this cookie
  const context = await browser.newContext();
  await context.addCookies([{ name: "NEXT_LOCALE", value: locale, url: base }]);
  const page = await context.newPage();

  for (const variant of variants) {
    const response = await page.goto(`${base}/cv?variant=${variant}`, {
      waitUntil: "networkidle"
    });
    if (!response?.ok()) {
      log(`✗ ${variant} (${locale}): HTTP ${response?.status()}`);
      process.exitCode = 1;
      continue;
    }
    await page.evaluate(() => document.fonts.ready);

    const pdf = await page.pdf({ format: "A4", printBackground: true });
    const target = `cv-exports/${variant}-${locale}.pdf`;
    writeFileSync(target, pdf);
    if (variant === siteVariant) writeFileSync(siteFiles[locale], pdf);

    const pages = pageCount(pdf);
    log(`✓ ${target}  ${pages} page${pages === 1 ? "" : "s"}`);
  }
  await context.close();
}

await browser.close();
