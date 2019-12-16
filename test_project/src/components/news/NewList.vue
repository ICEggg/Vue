<template>
    <div>
        <h1>新闻页面</h1>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
					<router-link :to="'/home/newlist/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'>
                                <span>发表时间:{{item.add_time | dataFormat}}</span>
                                <span>点击次数：{{item.click}}</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>

    </div>
    
</template>

<script>
import { Toast } from 'mint-ui';

export default {
    data() {
        return {
            result:{
                status:0,
                message:[
                    {
                        id:1,
                        title:"title1",
                        add_time:"2015-04-16T03:50:28.000Z",
                        zhaiyao:"摘要1",
                        click:11,
                        img_url:"src/images/shuijiao.jpg"
                    },
                    {
                        id:2,
                        title:"title2",
                        add_time:"2015-04-16T03:50:28.000Z",
                        zhaiyao:"摘要2",
                        click:12,
                        img_url:"src/images/muwu.jpg"
                    },
                    {
                        id:3,
                        title:"title3",
                        add_time:"2015-04-16T03:50:28.000Z",
                        zhaiyao:"摘要3",
                        click:13,
                        img_url:"src/images/yuantiao.jpg"
                    }
                ]
            },
            newList:[],

        };
    },
    created(){
       this.newList = this.result.message
    },
    methods:{
        getNewList() {
            // this.$http.get("").then(result=>{
            //     if(result.body.result == 0){

            //     }else{
            //         Toast("失败")
            //     }
            // });
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>