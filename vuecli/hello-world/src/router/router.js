import Vue from 'vue'
import Router from 'vue-router'

import FirstComponent from '../components/first'

Vue.use(Router)

//component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//{path:'/home',name:'home',component:HomeContainer}
export default new Router({
	routes:[
		{path:'/',name:'/',redirect:'/'},
        {path:'/first',component:FirstComponent}
	],
	linkActiveClass:'mui-active'
})