const {shareAll,withModuleFederationPlugin} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfs",

  remotes: {
    mmf: "http://localhost:4201/remoteEntry.js",
  },

  shared: {
    ...shareAll({singleton: true,strictVersion: true,requiredVersion: "auto"}),
  },
});
