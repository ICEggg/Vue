<template>
    <div>
        <h1>这是购物车</h1>
        <shopcarchild @getparam="getchildparam"></shopcarchild>
    </div>
</template>

<script>
import shopcarchild from '../shopcar/shopcar_child.vue'

export default {
    data(){
        return {

        };
    },
    methods:{
        getchildparam(param){
            console.log("这是父组件输出子组件传递的参数："+param)
            
        }
    },
    components:{
        shopcarchild
    }
}
</script>

<style scoped>

</style>