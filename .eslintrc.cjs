module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
    curly: 'error',
    'no-console': 'warn',
    'import/prefer-default-export': 'off',
    'no-unused-expressions': 'error',
    'react/jsx-no-useless-fragment': 'error',
    // 'import/order': [
    //   'error',
    //   {
    //     groups: [
    //       'builtin',
    //       'external',
    //       'internal',
    //       'parent',
    //       'sibling',
    //       'index',
    //       'object',
    //       'type',
    //     ],
    //     pathGroups: [
    //       {
    //         pattern: '@/**/**',
    //         group: 'parent',
    //         position: 'before',
    //       },
    //     ],
    //     alphabetize: { order: 'asc' },
    //   },
    // ],
  },
};
