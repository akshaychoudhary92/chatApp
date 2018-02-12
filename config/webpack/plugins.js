const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const extractSass = new ExtractTextPlugin({
    filename: 'style.css',
    disable: process.env.NODE_ENV !== 'production'
});

const client = [
    extractSass,
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: (m) => m.context && m.context.includes('node_modules')
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
        minChunks: Infinity
    }),
    new ForkTsCheckerWebpackPlugin({
        checkSyntacticErrors: true,
        tslint: true
    }),
    new HtmlWebpackPlugin({
        inject: false,
        template: require('html-webpack-template'),
        title: 'Hello, World!',
        filename: 'index.html',
        appMountId: 'app',
        cache: true,
        minify: {
            caseSensitive: true,
            collapseBooleanAttributes: true,
            collapseInlineTagWhitespace: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            html5: true,
            keepClosingSlash: true,
            removeComments: true,
            useShortDoctype: true,
            preserveLineBreaks: true
        },
        alwaysWriteToDisk: true,
        links: []
    })
];

const server = [
    new ForkTsCheckerWebpackPlugin({
        checkSyntacticErrors: true,
        tslint: true
    })
];

if (process.env.NODE_ENV === 'production') {
    client.push(
        new UglifyJsPlugin({
            cache: true,
            parallel: true,
            uglifyOptions: {
                compress: true
            }
        })
    )
} else {
    client.push(
        new HtmlWebpackHarddiskPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    );
}

module.exports = { extractSass, client, server };
