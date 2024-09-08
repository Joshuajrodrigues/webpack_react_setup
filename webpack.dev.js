const { merge } = require('webpack-merge')
const webpackCommon = require('./webpack.common')


module.exports = (env, arg) => {
    return merge(webpackCommon(env, arg), {
        mode: 'development',
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [
                        'style-loader', // Injects styles into DOM
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,

                            },
                        },

                    ],
                },
            ]
        },
        devServer: {
            historyApiFallback: { // handle serving of html files
                rewrites: [
                    { from: /^\/admin/, to: '/dashboard.html' },
                    { from: /./, to: '/index.html' },
                ]
            },

            port: 8080,
            hot: true
        }
    })
}