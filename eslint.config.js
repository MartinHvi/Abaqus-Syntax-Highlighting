/** @type {import('eslint').FlatConfig} */
const config = [
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      // Add more TypeScript rules here
    },
    ignores: ['node_modules/**', 'out/**'],
  },
  {
    files: ['*.js'],
    rules: {
      // Any JS specific rules, if needed
    },
    ignores: ['node_modules/**'],
  },
  {
    rules: {
      // ESLint recommended rules
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      // Add more ESLint recommended rules here
    },
    ignores: ['node_modules/**'],
  },
];

module.exports = config;
