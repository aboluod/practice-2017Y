var htmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');
module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist',
        fileName: 'js/[name].bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename : 'index.html',
            template : 'index.html',
            inject : true
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,     //处理以.js结尾的文件
                exclude: /(node_modules)/,       //不包括node_modules这个目录
                include: [
                    path.resolve(__dirname,"src")      //处理这个文件夹下面的以.js结尾的文件
                ],
                use: {
                    loader: 'babel-loader',     //use就是使用这个来处理文件
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                use: [
                    'style-loader', {
                        loader : 'css-loader',
                        options : {
                            importLoaders : 1
                        },
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader'
                    }, {
                        loader: 'less-loader'
                    }                                              
                ]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                }
            },
            {
                test: /\.(ejs)$/,
                use: {
                    loader: 'ejs-loader',
                }
            }
        ]
    }
}