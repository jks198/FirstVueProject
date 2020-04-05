var path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 在内存中，根据指定的模板页面，生成一份内存中的首页，同时自动把打包好的bundel注入到页面底部
// 如果要配置插件，需要在导出的对象中，挂在一个 plugins
var htmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: path.join(__dirname,'./src/main.js'),
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js'    
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),
            filename: "index.html" //设置生成好的内存页面的名称
        }),  
        new VueLoaderPlugin()
    ],
    module: {//配置所有第三方loader模块的
        rules: [
            { test: /\.css$/,use: ['style-loader','css-loader'] },//处理css文件的loader
            { test: /\.scss$/,use: ['style-loader','css-loader','sass-loader'] },
            { test:/\.(ttf|eot|svg|woff|woff2$)/,use: 'url-loader' },//处理字体文件的loader
            { test:/\.vue$/,use: 'vue-loader'},//处理 .vue文件的loader(依赖vue-template-compiler)
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                loader: "babel-loader"
                }
            },//配置Babel来转换高级的ES语法
        ]
    },
    
}