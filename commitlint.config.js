module.exports = {
  rules: {
    "header-max-length": [2, "always", 72],
    "body-leading-blank": [2, "always"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "chore", "refactor", "test", "revert"],
    ],
  },
  ignores: [(commit) => commit.match(/Merge (pull request|branch) .*/)]
};
