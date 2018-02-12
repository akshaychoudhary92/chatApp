const os = require('os');
const path = require('path');

const babel = {
    loader: 'babel-loader',
    options: {
        plugins: [],
        presets: []
    }
};

const cache = {
    loader: 'cache-loader',
    options: {
        cacheDirectory: path.join(process.cwd(), 'node_modules/.cache/cache-loader')
    }
};

const postcss = {
    loader: 'postcss-loader',
    options: {
        ident: 'postcss',
        plugins: (loader) => [require('postcss-cssnext')()]
    }
};

const sass = {
    loader: 'sass-loader'
};

const style = {
    loader: 'style-loader'
};

const thread = {
    loader: 'thread-loader',
    options: {
        workers: os.cpus().length - 1
    }
};

const ts = {
    loader: 'ts-loader',
    options: {
        happyPackMode: true,
        transpileOnly: true
    }
};

module.exports = { babel, cache, postcss, sass, style, thread, ts };
