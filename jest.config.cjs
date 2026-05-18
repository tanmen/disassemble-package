/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest/presets/default-esm',
  clearMocks: true,
  collectCoverageFrom: [
    'src/**/*.(js|ts)',
    '!src/**/*.d.ts',
    '!src/__fixtures__/**',
  ],
  roots: [
    '<rootDir>/src',
  ],
  testMatch: [
    '**/?(*.)+(spec|test).+(ts|js)',
  ],
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {useESM: true}],
  },
};
