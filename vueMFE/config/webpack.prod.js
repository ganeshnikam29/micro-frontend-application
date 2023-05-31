const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/remotevueapp/latest'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'vueRemote',
            filename: 'remoteEntry.js',
            exposes: {
                './VueApp': './src/bootstrap'
            }
        }),
    ]
}

module.exports = merge(commonConfig, prodConfig)