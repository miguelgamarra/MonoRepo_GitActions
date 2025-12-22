import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  collectCoverageFrom: ['app/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['/node_modules/', '/.next/'],
};

export default createJestConfig(customJestConfig);
