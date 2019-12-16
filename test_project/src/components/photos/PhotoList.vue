<template>
    <div>
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item',item.id == 0 ? 'mui-active' : '']" data-wid="tab-top-subpage-1.html" v-for="item in titlelist" :key="item.id">
							{{item.title}}
						</a>
					</div>
				</div>

			</div>
    </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.js'
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
export default {
    data(){
        return {
            result:{
                status:0,
                message:[
                    {
                        title:"全部",
                        id:0
                    },
                    {
                        title:"家居生活",
                        id:1
                    },
                    {
                        title:"摄影设计",
                        id:2
                    },
                    {
                        title:"明星美女",
                        id:3
                    },
                    {
                        title:"摄影器材",
                        id:4
                    },
                    {
                        title:"生活健康",
                        id:5
                    },
                    {
                        title:"古典风景",
                        id:6
                    }
                ]
            },
            titlelist:{}
        };
    },
    created(){
        this.titlelist = this.result.message
    },
    methods:{

    }
}
</script>

<style lang="stylus" scoped>

</style>