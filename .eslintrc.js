module.exports = {
  plugins: [ 'eslint-plugin-tsdoc'],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    './eslintrc-tests.js',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    project:"./tsconfig.json"
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-shadow': 'off',
    eqeqeq: 'error',
    '@typescript-eslint/no-shadow': 'warn',
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: 'function', next: 'function' },
      { blankLine: 'always', prev: 'function', next: '*' },
    ],
    '@typescript-eslint/prefer-optional-chain': 'warn',
    'tsdoc/syntax': 'warn',
  },
  // Glob based definitions
  overrides: [
    {
      files: ['**/*.test.ts'],
      env: {
        jest: true,
      },
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
};
