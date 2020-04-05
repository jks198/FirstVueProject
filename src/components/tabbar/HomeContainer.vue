<template>
    <div>
        <!--轮播图区域(这里采用的是本地图片路径，应该采用 axios模拟json完成)-->
        <mt-swipe :auto="4000">
        <!-- 在组件中，使用v-for循环的话，一定要使用 key-->
            <mt-swipe-item >
                <img src="image/1.jpg"/>
            </mt-swipe-item>

            <mt-swipe-item >
                <img src="image/2.jpg"/>
            </mt-swipe-item>

            <mt-swipe-item >
                <img src="image/3.jpg"/>
            </mt-swipe-item>
        </mt-swipe>

        <!--  九宫格 到 六宫格改造工程  -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">新闻资讯</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                        <div class="mui-media-body">图片分享</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">商品购买</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">留言反馈</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">视频专区</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">联系我们</div></a></li>
            </ul> 
    </div>
</template>

<script>
import { Toast} from 'mint-ui';
    export default {
        data() {
            return {
                lunbotuList: [] //保存轮播图的数据
            };
        },
        mounted(){
            this.getData();
        },
        methods: {
            // getLunbotu() {
            //     // 获取轮播图数据的方法
            //     this.$http.get("http://localhost:3000/todos").then(result => {
            //         // console.log(result.body);
            //         if (result.body.status ===0 ) {
            //             // 成功了
            //             this.lunbotuList = result.body.message;
            //         } else {
            //             //失败了：
            //             Toast('加载轮播图失败！')
            //         }
            //     })
            // }
            getData() {
                // this.axios.post("http://www.intmote.com/test.json").then(body => {
                //     this.lunbotuList = body.data;
                // })
                console.log("ok")
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mint-swipe {
        height: 200px;

    .mint-swipe-item {
        &:nth-child(1) {
            background:white;
        }

        &:nth-child(2) {
            background: blue;
        }

        &:nth-child(3) {
            background:cyan;
        }

        img {
            width: 100%;
            height: 100%;
        }
    }

    ul{
        background: #fff;
    }

    }
</style>