const { v4: uuidv4 } = require('uuid')
const fs = require('fs')
const path = require('path')

const tempDir = path.join(__dirname, '..', '.nyc_output')

// clean up and create nw folder
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true })
}

async function saveCoverage (page) {
  const coverage = await page.evaluate(function () {
    return window.__coverage__
  })

  fs.writeFileSync(path.join(tempDir, uuidv4() + '.json'),
    JSON.stringify(coverage))
}

module.exports = {
  saveCoverage
}
