// 写css3的时候，需要加上浏览器前缀，这里就需要安装postcss-loader 和 autoprefixer插件

// 新建postcss.config.js文件，以及配置
// 这个配置是在postcss-loader中引入autoprefixer插件
module.exports = {
    plugins : [
        require('autoprefixer')({
            browsers : ['last 5 versions']
        })
    ]
}