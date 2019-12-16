<template>
	<div class="app-container">
		
		<!-- 顶部 -->
			<mt-header fixed title="这是标题"></mt-header>
			<h1>123</h1>
		<!-- 中部 -->
		<transition mode="out-in">
			<router-view></router-view>
		</transition>
		<!-- 下部 -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
		
	</div>
</template>

<script>
export default {
	data(){
		return {
			msg:'123'
		}
	},
	methods:{
		
	}
}
</script>

<style>
.app-container{
	padding-top: 110ps;
	padding-bottom: 50.4px;
	overflow-x: hidden;
}

.v-enter{
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.v-enter-active,
.v-leave-active{
	transition: all 0.5s ease;
}
</style>