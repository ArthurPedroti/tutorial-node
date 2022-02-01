export default {
  clearMocks: true,
  coverageProvider: "v8",
  preset: "ts-jest",
  testMatch: [
    "**/*.spec.ts"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/modules/**/services/*.ts'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: [
    "text-summary",
    "lcov",
  ],
};