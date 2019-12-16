<template>
    <div>
        <h1>这是搜索</h1>

        <input type="button" value="加" @click="add"/>
        <input type="text" v-model="this.$store.state.count"/>
        <searchchild></searchchild>
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
        add(){
            this.$store.commit('add');
        }
    },
    components:{
        searchchild
    }
}
</script>

<style scoped>

</style>