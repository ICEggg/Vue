import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopCarContainer from './components/tabbar/ShopCarContainer.vue'

import NewList from './components/news/NewList.vue'
import NewInfo from './components/news/NewInfo.vue'

import photolist from './components/photos/PhotoList.vue'
import shopcarchild from './components/shopcar/shopcar_child.vue'
import searchchild from './components/search/search_child.vue'

var router = new VueRouter({
	routes:[
		{path:'/',redirect:'/home'},
		{path:'/home',component:HomeContainer},
		{path:'/member',component:MemberContainer},
		{path:'/shopcar',component:ShopCarContainer},
		{path:'/search',component:SearchContainer},

		{path:'/home/newlist',component:NewList},
		{path:'/home/newlist/:id',component:NewInfo},

		{path:'/home/photolist',component:photolist},
		{path:'/shopcar/shopcarchild',component:shopcarchild},
		{path:'/search/searchchild',component:searchchild}

	],
	linkActiveClass:'mui-active'
})

export default router


