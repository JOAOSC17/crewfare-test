module.exports = {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
    },
    transformIgnorePatterns: [
      "/node_modules/(?!(date-fns|react-day-picker)/)", 
    ],
    moduleNameMapper: {
      "\\.(css|less|scss|svg)$": "identity-obj-proxy",
      '\\.svg$': '<rootDir>/src/__mocks__/svgMock.js', 
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts']
  };
  