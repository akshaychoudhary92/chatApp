const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.sass', '.scss'],
    plugins: [new TsConfigPathsPlugin()]
};
