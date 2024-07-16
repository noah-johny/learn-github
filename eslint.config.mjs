// eslint.config.mjs
import { Linter } from "eslint";

/** @type {Linter.FlatConfig[]} */
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
