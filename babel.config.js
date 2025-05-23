module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    'module:react-native-dotenv',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@interfaces': './src/interfaces',
          '@components': './src/components',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@icons': './src/icons',
          '@helpers': './src/helpers',
          '@services': './src/services',
          '@constants': './src/constants',
          '@assets': './src/assets',
          '@actions': './src/redux/actions',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
};
