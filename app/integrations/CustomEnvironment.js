const NodeEnvironment = require('jest-environment-node');
const playwrightSetup = require('./helpers/playwright-setup');
const { saveCoverage } = require('./helpers/coverage');

class CustomEnvironment extends NodeEnvironment {
  async setup () {
    await super.setup();

    const browser = await playwrightSetup.launchBrowser();
    const context = await playwrightSetup.createContext(browser);
    this.global.browser = browser;
    this.global.context = context;
    this.global.page = await context.newPage();

    await playwrightSetup.addInitScript(context)
  }

  async teardown () {
    await playwrightSetup.closeBrowser(this.global.browser);
    await super.teardown()
  }

  async handleTestEvent (event) {
    // saving coverage
    if (event.name === 'test_done') {
      await saveCoverage(this.global.page)
    }

    if (event.name === 'test_done' && event.test.errors.length > 0) {
      const parentName = event.test.parent.name.replace(/\W/g, '-')
      const specName = event.test.name.replace(/\W/g, '-')

      await this.global.page.screenshot({
        path: `integrations/screenshots/errors/${parentName}_${specName}.png`
      })
    }
  }
}

module.exports = CustomEnvironment
