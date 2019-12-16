<template>
    <div>
        <h1>新闻详情 {{id}}</h1>
        <comment-box :id="id"></comment-box>
    </div>
</template>

<script>
import comment from '../subcomponents/comment.vue'

export default {
    data(){
        return {
            id:this.$route.params.id
        };
    },
    created(){

    },
    methods:{

    },
    components:{
        'comment-box':comment
    }
}
</script>

<style lang="stylus" scoped>

</style>