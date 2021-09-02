module.exports = {
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "json", "ts"],
  preset: "ts-jest",
  roots: ['<rootDir>/tests'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageProvider: 'babel',
  testEnvironment: 'node',
  moduleNameMapper: {
    '~/tests/(.*)': '<rootDir>/tests/$1',
    '~/(.*)': '<rootDir>/src/$1'
  },
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
};