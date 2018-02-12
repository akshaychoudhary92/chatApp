const path = require('path');

const loaders = require('./loaders');
const { extractSass } = require('./plugins');

const { babel, cache, css, postcss, sass, style, thread, ts } = loaders;

const client = {
    rules: [
        {
            test: /\.[jt]sx?/,
            include: path.join(process.cwd(), 'src/client'),
            use: [
                cache,
                thread,
                babel(
                    ['@babel/preset-env', '@babel/preset-stage-0', '@babel/preset-react'],
                    ['react-hot-loader/babel']
                ),
                ts
            ]
        },
        {
            test: /\.(s[ac]|c)ss$/,
            include: path.join(process.cwd(), 'src/client'),
            use: extractSass.extract({ fallback: style, use: [css, postcss, sass] })
        }
    ]
};

console.log(path.join(process.cwd(), 'src/client'));

const server = {
    rules: [
        {
            test: /\.[jt]s?/,
            include: path.join(process.cwd(), 'src/server'),
            use: [
                cache,
                thread,
                babel([['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-stage-0']),
                ts
            ]
        }
    ]
};

module.exports = { client, server };
