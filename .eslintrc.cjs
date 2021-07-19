module.exports = {
  extends: ["airbnb-typescript", 'plugin:jest/recommended', "prettier"],
  parserOptions: {
    project: "./tsconfig.eslint.json",
  },
  rules: {
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        format: null,
        selector: "default",
        leadingUnderscore: "allow",
      },
    ],
    "import/extensions": "off",
    "no-use-before-define": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
    "no-underscore-dangle": "off",
    "react/no-unescaped-entities": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [".storybook/**", "stories/**"],
      },
    ],
  },
  plugins: ["@typescript-eslint", 'jest'],
};
