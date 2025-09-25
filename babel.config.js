module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        root: ['./src/'],
        alias: {
          '@app': './src',
          '@core': './src/core',
          '@store': './src/store',
          '@models': './src/models',
          '@screens': './src/screens',
          '@assets': './assets',
          '@controllers': './src/controllers',
        },
      },
      'react-native-reanimated/plugin',
    ],
    ['react-native-worklets/plugin'],
  ],
  presets: ['module:@react-native/babel-preset'],
};
