module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    plugins: ['@typescript-eslint', 'prettier', 'react-hooks', 'jest'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'next/core-web-vitals',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'prettier',
        'plugin:react-hooks/recommended',
        'plugin:jest/recommended',
        'plugin:jest/style',
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        'arrow-body-style': ['error', 'always'],
        'prefer-arrow-callback': 'error',
        'arrow-spacing': 'error',
        'prefer-promise-reject-errors': 'off',
        'react/prop-types': 'off',
    },
}
