const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path'),
    jsPath = './src',
    destPath = './build',
    srcPath = path.join(__dirname, jsPath),
    outputPath = path.join(__dirname, destPath);

module.exports = {
    optimization: {
        minimize: false
    },
    output: {
        path: outputPath,
        filename: 'bundle.js',
        publicPath: '/'
    },
    entry: {
        test: [path.join(srcPath, '/index.js')],
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/
    },
    devServer: {
        contentBase: outputPath,
        compress: true,
        port: 3000,
        historyApiFallback: true,
        open: true,
        openPage: '',
        proxy: {
            '/socket' : {
                target: 'http://localhost:5000',
                ws: true
            }
        }
    },
    plugins: [new HtmlWebpackPlugin({
        template: "index.html",
        filename: "index.html"
    })],
    context: srcPath,
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.worker\.js$/,
                use: { loader: 'worker-loader' }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    }
};
