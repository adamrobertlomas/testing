let common = [
  `cucumber/**/*.feature`,
  `--require cucumber/cucumber-run-babel.js`,
  `--require cucumber/step_definitions/**/*.ts*`,
  `--format "json:cucumber/cucumber-results.json"`,
  `--format-options '{"snippetInterface": "synchronous"}'`,
].join(" ");

module.exports = {
  default: common,
};
