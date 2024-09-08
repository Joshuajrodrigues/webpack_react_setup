const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');




module.exports = (env) => {
    console.log("webpack env", env);

    return {
        entry: {
            portal: path.join(__dirname, './src/portal/index.jsx'),
            dashboard: path.join(__dirname, './src/admin/dashboard.jsx')
        },
        output: {
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, 'dist'),
            clean: true
        },
        externals: {
            react: "React",
            'react-dom': 'ReactDOM'
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        module: {
            rules: [

                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                            ],
                        },
                    },
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html',
                templateParameters: {
                    scripts: scriptsToLoad(true)
                },
                filename: 'index.html',
                chunks: ['portal']
            }),
            new HtmlWebpackPlugin({
                template: './public/dashboard.html',
                templateParameters: {
                    scripts: scriptsToLoad(true)
                },
                filename: 'dashboard.html',
                chunks: ['dashboard'], // Only include the dashboard bundle
            }),
        ],
        devServer: {
            static: path.resolve(__dirname, 'dist'),
            port: 3000,
            open: true
        }



    }
}




function scriptsToLoad(env) {
    const reactProd = [
        "https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js",
        "https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js"
    ]

    const reactDev = [
        "https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.development.js",
        "https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.development.js"
    ]
    if (env === true) {
        return [...reactDev]
    } else {
        return [...reactProd]
    }
}
