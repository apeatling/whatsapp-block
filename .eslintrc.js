module.exports = {
    root: true,
    'extends': [
        'wpcalypso/react',
        'plugin:jsx-a11y/recommended',
        'plugin:jest/recommended',
    ],
    parser: 'babel-eslint',
    env: {
        browser: true,
        node: true,
        jest: true
    },
    globals: {
        asyncRequire: true,
        PROJECT_NAME: true,
        wp: true,
    },
    plugins: [
        'jest',
        'jsx-a11y',
        'import',
    ],
    rules: {
        camelcase: 0, // REST API objects include underscores
        'max-len': 0,
        'no-unused-expressions': 0, // Allows Chai `expect` expressions
        'wpcalypso/import-no-redux-combine-reducers': 0,
        'wpcalypso/jsx-classname-namespace': 0,
        'jsx-a11y/anchor-has-content': 0, // i18n-calypso translate triggers false failures
        'react/react-in-jsx-scope': 0
    }
};
