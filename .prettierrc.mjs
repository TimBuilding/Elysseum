export default {
    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
    "trailingComma": "es5",
    "semi": true,
    "tabWidth": 2,
    "singleQuote": true,
    "jsxSingleQuote": true,
};
  