const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const DashboardPlugin = require("@module-federation/dashboard-plugin");


const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/remotevueapp/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'vueRemote',
            filename: 'remoteEntry.js',
            exposes: {
                './VueApp': './src/bootstrap'
            }
        }),
        new DashboardPlugin({
            versionStrategy: `${Date.now()}`,
            dashboardURL: `${process.env.DASHBOARD_BASE_URL}/env/development/update?token=${process.env.DASHBOARD_WRITE_TOKEN}`,
            filename: 'dashboard.json',
            metadata: {
              baseUrl: 'http://localhost:3001',
              source: {
                url: `${process.env.REPOSITORY_URL}/blob/master/home`,
              },
              remote: 'http://localhost:3001/remoteEntry.js',
            },
          }),   
    ]
}

module.exports = merge(commonConfig, prodConfig);