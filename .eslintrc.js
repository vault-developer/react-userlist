module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['#helpers', './src/helpers'],
          ['#redux', './src/redux'],
          ['#components', './src/components'],
        ],
        extensions: ['.js']
      }
    }
  },
  rules: {
    'react/jsx-filename-extension': 0,
    'comma-dangle': 0,
    'import/prefer-default-export': 0,
    'arrow-parens': 0,
    'no-trailing-spaces': 0,
    'no-unused-vars': 0,
    'no-shadow': 0
  },
};
