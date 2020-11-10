const fse = require('fs-extra')
const chalk = require('chalk')
const path = require('path')

const sourceFile = './test/coverage/coverage-final.json'
const targetFile = './integrations/.nyc_output/unit-test-coverage-final.json'

fse.copySync(sourceFile, targetFile)
console.log(chalk.green('Copied file from unit test to integration tmp folder.'))
