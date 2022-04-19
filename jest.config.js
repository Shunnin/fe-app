/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '__test__/.*\\.test\\.[jt]sx?$',
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    'src/common/**/*.{ts,tsx}',
    'src/pages/**/*.{ts,tsx}',
    '!src/**/index.{ts,tsx}',
    '!src/**/*.spec.{ts,tsx}',
    '!src/**/*.test.{ts,tsx}',
  ],
  setupFilesAfterEnv: ['<rootDir>/config/jest/setup-tests.ts'],
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
    '^.+\\.(css|less|scss|style|svg|png|jpg)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/config/jest/babel-transform.ts',
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  resetMocks: true,
};
