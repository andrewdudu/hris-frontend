const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../'),
  testEnvironment: '<rootDir>/integrations/CustomEnvironment.js',
  testRunner: 'jest-circus/runner',
  setupFilesAfterEnv: ['<rootDir>/integrations/helpers/setupTests.js'],
  cache: false,
  verbose: true,
  collectCoverage: false,
  testTimeout: 60000,
  testMatch: [
    '<rootDir>/integrations/spec/**/*.spec.(js)'
  ]
};
