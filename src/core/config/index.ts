import defaultConfig from './config.json';

const appConfig = defaultConfig;

export const appFullVersion = (): string =>
  `${appConfig.appInfo.version}.${appConfig.appInfo.build}`;

export const config = (): typeof appConfig => appConfig;
