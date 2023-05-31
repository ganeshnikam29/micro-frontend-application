const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { merge } = require('webpack-merge');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest'
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
    ]
}

module.exports = merge(commonConfig, prodConfig)