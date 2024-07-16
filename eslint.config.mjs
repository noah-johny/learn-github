// eslint.config.mjs

/** @type {import("eslint").FlatConfig[]} */
export default [
  {
    languageOptions: {
      ecmaVersion: 12,
      sourceType: "module",
      globals: {
        browser: true,
        es2021: true,
      },
    },
    rules: {
      // Add your custom rules here
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];
