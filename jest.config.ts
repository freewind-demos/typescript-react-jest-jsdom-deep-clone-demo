import {InitialOptions} from "@jest/types/build/Config";

const config: InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
}

export default config;
