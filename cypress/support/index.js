// import "./commands";
// import "@cypress/code-coverage/support";
//
// module.exports = (on, config) => {
//   require("@cypress/code-coverage/task")(on, config);
//   on("file:preprocessor", require("@cypress/code-coverage/use-babelrc"));
//   return config;
// };

const codeCoverageTask = require('@cypress/code-coverage/task');

module.exports = (on, config) => {
  codeCoverageTask(on, config);
  return config;
};
