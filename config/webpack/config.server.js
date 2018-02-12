const path = require('path');

const webpackNodeExternals = require('webpack-node-externals');

const { server: serverModule } = require('./module');
const { server: serverPlugins } = require('./plugins');
const resolve = require('./resolve');

const server = {
    context: process.cwd(),
    entry: path.join(process.cwd(), 'src/server/index.ts'),
    output: {
        filename: 'app.js',
        path: process.cwd()
    },
    module: serverModule,
    resolve,
    externals: [webpackNodeExternals()],
    target: 'node',
    node: {
        __dirname: false,
        __filename: false
    },
    plugins: serverPlugins
};

module.exports = server;
