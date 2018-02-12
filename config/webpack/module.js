// For backend: [['@babel/preset-env', { targets: {node: 'current'} }], '@babel/preset-stage-0']
const path = require('path');

const loaders = require('./loaders');
const { extractSass } = require('./plugins');

const { babel, cache, css, postcss, sass, style, thread, ts } = loaders;

const client = {
    rules: [
        {
            test: /\.[jt]sx?/,
            include: path.join(process.cwd(), 'src/client'),
            use: [cache, thread, babel, ts]
        },
        {
            test: /\.(s[ac]|c)ss$/,
            include: path.join(process.cwd(), 'src/client'),
            use: extractSass.extract({ fallback: style, use: [css, postcss, sass] })
        }
    ]
};

client.rules[0].use[2].options = {
    plugins: ['react-hot-loader/babel'],
    presets: ['@babel/preset-env', '@babel/preset-stage-0', '@babel/preset-react']
};

const server = {
    rules: [
        {
            test: /\.[jt]s?/,
            include: path.join(process.cwd(), 'src/client'),
            use: [cache, thread, babel, ts]
        }
    ]
};

client.rules[0].use[2].options = {
    presets: [['@babel/preset-env', { targets: {node: 'current'} }], '@babel/preset-stage-0']
};

module.exports = { client, server };
