const { svelte } = require("@sveltejs/vite-plugin-svelte")

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "plugin:prettier/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}", "*.svelte"],
      processor: "svelte/svelte",
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: svelte,
  rules: {},
}
