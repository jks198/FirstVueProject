
import Vue from '../node_modules/vue/dist/vue'

// 1.1导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

// 1.3 导入自己的router.js模块
import router from './router'

// // 2.1导入 vue-resource
// import VueResource from 'vue-resource'
// // 2.2安装vue-resource
// Vue.use(VueResource)

// 导入App根组件
import app from '../src/App.vue'

// 按需导入 Mint-UI 中的组件
import { Header, Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'//最嗨的是他这个直接引入的是一个css文件
Vue.component(Header.name,Header)// console.log(Header.name) :  mt-header
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入mui的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
import "babel-polyfill"
Vue.use(VueAxios, axios)
var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router, //1.4挂载路由对象到VM实例上
})