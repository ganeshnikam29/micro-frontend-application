const commonConfig = require('./webpack.common');

const { merge } = require('webpack-merge');

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')


const devConfig = {
    mode: 'development',
    devServer: {
        port: 8082
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

module.exports = merge(commonConfig, devConfig)