// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint"
  },
  env: {
    browser: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "prettier",
    "prettier/vue"
  ],
  // required to lint *.vue files
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    // allow async-await
    "generator-star-spacing": "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-tabs": 0
  }
};
