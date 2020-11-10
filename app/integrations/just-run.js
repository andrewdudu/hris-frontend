const playwrightSetup = require('./helpers/playwright-setup')
const fs = require('fs')
const path = require('path')
const assert = require('assert')

const tempDir = path.join(__dirname, 'just-run', 'tmp')

if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true })
}

(async () => {
  const hrstart = process.hrtime()
  const browser = await playwrightSetup.launchBrowser()
  const context = await playwrightSetup.createContext(browser)
  const hrendBoot = process.hrtime(hrstart)
  console.info('Boot time (hr): %ds %dms', hrendBoot[0], hrendBoot[1] / 1000000)

  const page = await context.newPage()

  await page.goto('https://localhost:10001/_search')
  await page.waitForSelector('h1')
  const h1Text = await page.$eval('h1', el => el.innerText)
  console.log(h1Text)

  assert(h1Text === 'Toko Online Terlengkap & Terpercaya')
})()
