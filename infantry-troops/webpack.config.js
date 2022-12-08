const path = require('path')
const { name: packageName } = require('./package.json')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve('../', 'dist', packageName),
        filename: 'js/[name].[chunkhash].js',
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ],
}
