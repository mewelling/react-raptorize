module.exports = {
  displayName: 'ui',
  testEnvironment: 'jsdom',
  // testMatch: ['**/?*.test.tsx'],
  testMatch: ['**/__tests__/*.js'],
  // setupFilesAfterEnv: ['<rootDir>/test/setup.ui.ts'],
  // moduleNameMapper: {
  //   '^@src/(.*)$': '<rootDir>/src/$1', // Resolve @src/* imports
  //   '^@test/(.*)$': '<rootDir>/test/$1', // Resolve @test/* imports
  // },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ogg)$": "<rootDir>/src/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/src/__mocks__/styleMock.js"
  }
};