const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {

    entry: './src/main.js',

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CopyWebpackPlugin([{
            from: 'static/**/*',
            to: '',
            transformPath (targetPath, absolutePath)
            {
                const arr = targetPath.split('/')
                arr.shift()
                return arr.join('/')
            }
        }]),
        new CleanWebpackPlugin(['dist'])
    ]
}
