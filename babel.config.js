module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
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
          '@constants': './src/constants'
        }
      }
    ]
  ],
  env: {
    production: {
      plugins: [
        'react-native-paper/babel',
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
              '@constants': './src/constants'
            }
          }
        ]
      ]
    }
  }
};
