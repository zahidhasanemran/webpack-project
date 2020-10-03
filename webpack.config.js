const path = require('path');
const autoprefixer = require('autoprefixer')


module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js', 
        publicPath: ''
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclueds: '/node_modules/'

        },
        {
            test: /\.css$/,
            exclueds: '/node_modules/',
            use: [
                {loader: 'style-loader'},
                {loader: 'css-loader', options: {
                    importLoader: 1,
                    modules: true,
                    localIdentName: '[name]__[local]__[hash:base64:5]'
                }}, // webpack read/parses loader in use array from right to left bottom to top
                {
                    loader: "postcss-loader",
                    options: {
                        ident: 'postcss',
                        plugins: () => [
                            autoprefixer({
                                "browsers": [
                                    "> 1%",
                                    "last 2 versions"
                                ]
                            })
                        ]
                    }
                }
            ]
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/,
            loader: 'url-loader?limit=8000&name=images/[name].[ext]',
        }
    ]
}