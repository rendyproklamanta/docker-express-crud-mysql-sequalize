const envMode = process.env.NODE_ENV;

let configs;
configs = require(`./config`);

// if (envMode === "production") {
//   //For Production
//   configs = require(`./config.prod`);
// } else if (envMode === "development" || envMode === "test") {
//   //For Development
//   configs = require(`./config.dev`);
// } else {
//   configs = require(`./config`);
// }

module.exports.getServerConfig = function () {
  return configs.server;
};
