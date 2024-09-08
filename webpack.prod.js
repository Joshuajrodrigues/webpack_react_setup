const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common')
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, args) => {
    return merge(webpackCommon(env, args), {
        mode: 'production',
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin()],
        },
    })
}