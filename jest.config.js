module.exports = {
  coverageDirectory: 'coverage',
  testRegex: '/.*\\.test\\.tsx?$',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.{test,types,d}.{ts,tsx}',
    '!src/index.tsx'
  ],
  moduleDirectories: ['node_modules'],
  setupFilesAfterEnv: ['./test/test-setup.ts'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  },
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  /* Маппер абсолютных путей из tsconfig.json */
  moduleNameMapper: {
    '^.+\\.(css|less)$': 'identity-obj-proxy',
    "src/(.*)": '<rootDir>/src/$1',
    "test/(.*)": '<rootDir>/test/$1',
  }
};
