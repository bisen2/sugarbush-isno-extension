const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/core.ts',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    "plugins": [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'node_modules/webextension-polyfill/dist/browser-polyfill.min.js' },
                { from: 'src/manifest.json' },
                { from: 'icons', to: 'icons' }
            ]
        })
    ]
}
