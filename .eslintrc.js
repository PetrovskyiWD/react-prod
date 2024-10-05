module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:react/jsx-runtime',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
    'prettier'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@stylistic',
    'i18next'
  ],
  rules: {
    '@stylistic/semi': [2, 'never'],
    'max-len': ['error', { code: 120 }],
    'comma-dangle': ['error', 'never'],
    'quotes': ['error', 'single']
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
