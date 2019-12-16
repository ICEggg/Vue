<template>
    <div>
        <h1>搜索的子组件</h1>
        <input type="text" v-model="this.$store.getters.optcount" />
    </div>
</template>

<script>
import searchchild from '../search/search_child.vue'

export default {
    data(){
        return {

        };
    },
    methods:{

    },
    components:{
        
    }
}
</script>

<style lang="stylus" scoped>

</style>