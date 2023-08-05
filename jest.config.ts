export {}
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    esModuleInterop: true,
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
      '^.+\\.jsx?$': 'babel-jest',
    },
  };
  