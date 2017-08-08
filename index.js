'use strict';

module.exports = {
  extends: "eslint:recommended",

  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true
    }
  },

  env: {
    node: true,
    es6: true
  },

  rules: {

    // errors
    "comma-dangle": "warn",
    "no-console": "warn",
    "no-debugger": "warn",
    "no-empty": "warn",
    "no-extra-parens": "warn",

    // best practices
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "curly": "warn",
    "dot-location": ["warn", "property"],
    "eqeqeq": "warn",
    "no-alert": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-div-regex": "warn",
    "no-else-return": "warn",
    "no-empty-function": "warn",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-implied-eval": "error",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-native-reassign": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": ["error", { allowTernary: true } ],
    "no-unused-labels": "error",
    "no-useless-call": "error",
    "no-useless-concat": "warn",
    "no-void": "error",
    "no-with": "error",
    "radix": "error",
    "wrap-iife": "error",
    "yoda": "error",

    // variables
    "no-catch-shadow": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-undef-init": "warn",
    "no-undefined": "warn",
    "no-unused-vars": "error",
    "no-use-before-define": "warn",

    // stylistic
    "array-bracket-spacing": ["warn", "always"],
    "block-spacing": "warn",
    "camelcase": ["warn", { properties: "never" } ],
    "comma-spacing": "warn",
    "comma-style": "warn",
    "computed-property-spacing": "warn",
    "eol-last": "warn",
    "indent": ["warn", 2, { "SwitchCase": 1 } ],
    "key-spacing": "warn",
    "keyword-spacing": "warn",
    "linebreak-style": "warn",
    "lines-around-comment": "warn",
    "max-depth": ["warn", 6],
    "max-len": ["warn", 100],
    "max-nested-callbacks": "warn",
    "new-cap": "warn",
    "new-parens": "warn",
    "no-array-constructor": "warn",
    "no-bitwise": "error",
    "no-lonely-if": "warn",
    "no-mixed-spaces-and-tabs": "warn",
    "no-multiple-empty-lines": ["warn", { max: 1 } ],
    "no-negated-condition": "warn",
    "no-nested-ternary": "warn",
    "no-new-object": "warn",
    "no-spaced-func": "warn",
    "no-tabs": "warn",
    "no-trailing-spaces": "warn",
    "no-unneeded-ternary": "warn",
    "no-whitespace-before-property": "warn",
    "object-curly-spacing": ["warn", "always"],
    "semi": "warn",
    "semi-spacing": "warn",
    "space-before-blocks": "warn",
    "space-before-function-paren": ["warn", "never"],
    "space-in-parens": "warn",
    "space-infix-ops": "warn",
    "space-unary-ops": "warn",
    "spaced-comment": "warn",

    // ES6
    "arrow-spacing": ["warn", { "before": true, "after": true } ],
    "constructor-super": "error",
    "generator-star-spacing": ["warn", { "before": true, "after": false } ],
    "no-class-assign": "error",
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": "error",
    "no-new-symbol": "error",
    "no-this-before-super": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-var": "error",
    "object-shorthand": "warn",
    "prefer-arrow-callback": "warn",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "warn",
    "require-yield": "error",
    "template-curly-spacing": ["warn", "always"],
    "yield-star-spacing": ["warn", { "before": false, "after": true } ]
  }
};
