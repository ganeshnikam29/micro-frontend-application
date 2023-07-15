const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const DashboardPlugin = require("@module-federation/dashboard-plugin");
const { merge } = require('webpack-merge');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
              RemoteCounterApp: `counter@${domain}/remotereactapp/latest/remoteEntry.js`,
              RemoteVueApp: `vueRemote@${domain}/remotevueapp/latest/remoteEntry.js`
            },
            shared: ['react', 'react-dom']
        }),
        new DashboardPlugin({
            versionStrategy: `${Date.now()}`,
            dashboardURL: `${process.env.PRODUCTION_DOMAIN}/env/development/update?token=${process.env.DASHBOARD_WRITE_TOKEN}`,
            filename: 'dashboard.json',
            metadata: {
              baseUrl: 'http://localhost:3001',
              remote: 'http://localhost:3001/remoteEntry.js',
            },
        }),
    ]
}

module.exports = merge(commonConfig, prodConfig)