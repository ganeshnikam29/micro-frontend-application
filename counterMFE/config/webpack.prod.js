const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: '/remotereactapp/latest'
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

module.exports = merge(commonConfig, prodConfig);
