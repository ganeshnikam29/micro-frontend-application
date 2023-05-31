const { merge } = require("webpack-merge");

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "counter",
      filename: "remoteEntry.js",
      exposes: {
        "./CounterApp": "./src/bootstrap",
      },
      shared: ['react', 'react-dom']
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
