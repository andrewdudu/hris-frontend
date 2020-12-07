const mockUrls = require('./mock-urls');
const playwright = require('playwright');
const mockLoader = require('./mock-loader');

async function launchBrowser () {
  const browser = await playwright['chromium'].launch({
    // headless: false,
    // devtools: true
  });
  return browser
}

async function closeBrowser (browser) {
  await browser.close()
}

async function createContext (browser) {
  const context = await browser.newContext({
    ignoreHTTPSError: true
  });

  for (const i in mockUrls.abortUrls) {
    await context.route(mockUrls.abortUrls[i], route => route.abort())
  }

  await mockLoader.mockApi(context);

  return context
}

async function addInitScript (context) {
  // set caret transparent
  await context.addInitScript({
    content: `
document.addEventListener('DOMContentLoaded', () => {
  const a = document.createElement("style")
  a.innerText = "* { caret-color: transparent; }"
  document.head.appendChild(a)
})
` })
}

module.exports = {
  launchBrowser,
  closeBrowser,
  createContext,
  addInitScript
};
