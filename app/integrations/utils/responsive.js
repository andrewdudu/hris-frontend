async function setMobile (page) {
  await page.setViewportSize({
    width: 360,
    height: 640
  })
}

async function setDesktop (page) {
  await page.setViewportSize({
    width: 1280,
    height: 720
  })
}
module.exports = {
  setMobile,
  setDesktop
}