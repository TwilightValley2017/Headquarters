const path = require('path')
const { name: packageName } = require('./package.json')

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `${packageName}.bundle.js`,
    },
    mode: 'development'
}