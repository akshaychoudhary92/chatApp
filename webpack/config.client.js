// tslint:disable:object-literal-sort-keys
const path = require('path');

const { client: clientModule } = require('./module');
const { client: clientPlugins } = require('./plugins');
const resolve = require('./resolve');

const client = {
    context: process.cwd(),
    entry: ['babel-polyfill', path.join(process.cwd(), 'src/client/index.tsx')],
    output: {
        filename: '[name].js',
        path: path.join(process.cwd(), 'build'),
        publicPath: '/public/'
    },
    module: clientModule,
    resolve,
    plugins: clientPlugins
};

if (process.env.NODE_ENV !== 'production') {
    client.entry.unshift('webpack-hot-middleware/client?reload=true');
}

module.exports = client;
