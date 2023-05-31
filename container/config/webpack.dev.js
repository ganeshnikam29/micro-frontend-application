const commonConfig = require('./webpack.common');W
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { merge } = require('webpack-merge');

const devConfig = {
    entry: './src/index',
    mode: 'development',
    devServer: {
        port: 8080
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
              RemoteCounterApp: `counter@http://localhost:8081/remoteEntry.js`,
              RemoteVueApp: `vueRemote@http://localhost:8082/remoteEntry.js`
            },
            shared: ['react', 'react-dom']
        }),
       
    ]
}

module.exports = merge(commonConfig, devConfig)