module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 11,
    },
    rules: {
        'comma-dangle': 0,
        'arrow-body-style': 0,
        'import/prefer-default-export': 0,
        semi: ['error', 'always'],
        indent: ['error', 4]
    }
};
