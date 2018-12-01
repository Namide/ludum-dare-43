const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {

    entry: './src/main.js',

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
        // hot: true,
        port: 3000,
        historyApiFallback: {
            index: 'index.html'
        }
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
        }])
    ],

    module: {
        rules: [{
            test: /\.sass$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }]
    }
}
