// __dirname指的就是当前webpack.config.js文件所在的绝对路径
console.log(__dirname);
//引入插件
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
    // 入口设置
    entry: {
        main: './src/js/main.js',
        cals: './src/js/cals.js',
        index: './src/js/index.js',
        list: './src/js/list.js',
        detail: './src/js/detail.js',
    },
    // 输出设置
    output: {
        path: __dirname + '/dist',   //要用绝对路径
        filename: 'js/[name]-[hash].bundle.js'   //打包后输出的文件名
    },
    plugins: [new HtmlWebpackPlugin({
        // 插件的配置选项
        //打包生成的。html文件是以根目录下面的index.html为模板的
        template : './index.html',
        //打包生成的文件名
        filename: 'index.html',
        //生成的js文件要引入在生成的.html文件的哪里
        inject: 'head',
        //inject有4个值： true:引入js文件； false: 不引入js文件； body:把js文件引入在body中； head：把js文件引入到head中

        //title:模板的标题
        title: '首页',

        //自定义选项
        date: new Date(),
        userName: 'zhBo',
        age: 18,

        // minify选项，压缩html文件
        minify : {
            removeComments : true,      //去掉注释
            collapseWhitespace : true     //去掉空格
        },
        chunks : ['main','index']
    }),
    new HtmlWebpackPlugin({
        template : './index.html',  
        filename: 'list.html',
        inject: 'head',
        title: '列表',
        chunks : ['main','list'],
        inlineSource : '.(js|css)$'    //全部内嵌   利用html-webpack-inline-source-plugin插件实现把引入的js,css文件变成内嵌的，减少了http请求
    }),
    new HtmlWebpackInlineSourcePlugin(),
    new HtmlWebpackPlugin({
        template : './index.html',
        filename: 'detail.html',
        inject: 'head',
        title: '详情',
        chunks : ['main','detail']
    })
],
    module: {
        rules: [
            {
                test: /\.(png|gif|jpg|svg|jpeg)$/i,
                use: {
                    loader: 'file-loader',
                    query: {
                        name: 'assets/[hash].[ext]'
                    }
                }
            }
        ]
    }
}
