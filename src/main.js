
import Vue from '../node_modules/vue/dist/vue'

// 导入App根组件
import app from '../src/App.vue'

// 按需导入 Mint-UI 中的组件
import { Header } from 'mint-ui'
import 'mint-ui/lib/style.css'//最嗨的是他这个直接引入的是一个css文件
Vue.component(Header.name,Header)// console.log(Header.name) :  mt-header

//导入mui的样式
import './lib/mui/css/mui.min.css'
var vm = new Vue({
    el: "#app",
    render: c => c(app)
})