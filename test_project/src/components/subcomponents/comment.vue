<template>
    <div>
        <h4>发表评论  这是父组件传给子组件的id值：{{id}}</h4>
        <textarea placeholder="输入内容"></textarea>

        <mt-button type="primary" size="large">发表评论</mt-button>
        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return {

        };
    },
    props:["id"],
    created(){
        
    },
    methods:{
        
    },
    
}
</script>

<style lang="stylus" scoped>

</style>