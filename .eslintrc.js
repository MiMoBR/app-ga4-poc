module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: '@react-native-community',,
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  rules: {
    semi: [2, 'never'],
    'comma-dangle': [2, 'never'],
    camelcase: 'off',
    'arrow-parens': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'global-require': 'off',
    'no-useless-catch': 'off',
    'react/no-unescaped-entities': 'off',
    'no-nested-ternary': 'off',
    'no-unused-expressions': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'eslintmax-len': 'off',
  },
};
