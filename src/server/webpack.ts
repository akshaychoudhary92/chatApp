const wepbackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');

const config = require('../../config/webpack/config.client');
const compiler = webpack(config);

export function webpackMiddleware (app) {
    app.use(
        wepbackDevMiddleware(compiler, {
            publicPath: config.output.publicPath,
            stats: 'minimal'
        })
    );

    app.use(webpackHotMiddleware(compiler));
}
