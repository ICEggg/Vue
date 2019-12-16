<template>
    <div>
        <h1>购物车子组件</h1>
        <input type="button" value="aaa" @click="add()" ref="child"/>
    </div>

</template>

<script>
export default {
    data(){
        return {

        };
    },
    methods:{
        add(){
            console.log(this.$refs.child.value);
            this.$emit('getparam',this.$refs.child.value)
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>