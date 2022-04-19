/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '__test__/.*\\.test\\.[jt]sx?$',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
    '^.+\\.(css|less|scss|style)$': 'identity-obj-proxy',
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
