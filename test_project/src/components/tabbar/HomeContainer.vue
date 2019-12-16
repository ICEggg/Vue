<template>
    <div>
        <mt-swipe :auto="1000">
            <mt-swipe-item><img src="../../images/1.jpg"></mt-swipe-item>
            <mt-swipe-item><img src="../../images/2.jpg"></mt-swipe-item>
        </mt-swipe>
       
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newlist">
                    <img src="../../images/menu1.png" class="imgclass-self">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
                    <img src="../../images/menu2.png" class="imgclass-self">
                    <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu3.png" class="imgclass-self">
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu4.png" class="imgclass-self">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu5.png" class="imgclass-self">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu6.png" class="imgclass-self">
                    <div class="mui-media-body">联系我们</div></a></li>
            
        </ul> 
    </div>
</template>

<script>
export default {
    data(){
        return {

        };
    },
    methods:{
        getLunBoTu(){
            // this.$http.get("").then(result=>{
            //     console.log(result.body);
            // })

        }
    }
}
</script>

<style scoped>
.mint-swipe{
    height : 200px;
}

/* .mint-swipe-item:nth-child(1){
    background-color: red;
}
.mint-swipe-item:nth-child(2){
    background-color: blue;
}
.mint-swipe-item:nth-child(3){
    background-color: yellow;
} */

img{
    height: 100%;
    width:100%;
}

.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border:none;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0;
    
}
.imgclass-self {
        height: 60px;
        width: 60px;
    }

/* .mui-media-body{
    font-size: 5px;
} */
</style>