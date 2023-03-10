const { OFF, ERROR } = require("./const")

module.exports = {
  rules: {
    "react/jsx-props-no-spreading": OFF,
    "react/prop-types": OFF,
    "react/jsx-fragments": [ERROR, "syntax"],
    "react/jsx-filename-extension": [ERROR, { extensions: [".ts", ".tsx"] }],
    "jsx-a11y/anchor-is-valid": [
      ERROR,
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "jsx-a11y/label-has-associated-control": [
      ERROR,
      {
        controlComponents: ["StyledTextarea"],
      },
    ],
    "react/function-component-definition": [
      ERROR,
      { namedComponents: "arrow-function" },
    ],
    "@next/next/no-img-element": OFF, // 課題用なので気にしない
  },
  overrides: [
    {
      files: ["**/*.tsx"],
      rules: {
        "no-use-before-define": OFF,
      },
    },
  ],
}
