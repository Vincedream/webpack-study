const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/bundle.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: 'index.html'
            }),
            new MiniCssExtractPlugin({
                filename: "css/[name].[hash].css",
                chunkFilename: "css/[id].[hash].css",
            })
        ],
        module: {
            rules: [
                {
                    test: /\.css/,
                    use: [
                        // 'style-loader',
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ]
                },
                {
                    test: /\.(png|jpg|gif|jpeg|svg)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 1024,
                                name: '[name].[hash:6].[ext]',
                                outputPath: 'images/',
                                publicPath: '../images'
                            }
                        }
                    ]
                }
            ]
        }
    }
}