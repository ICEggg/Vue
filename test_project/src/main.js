/*import $ from 'jquery'

$(function(){
	$('li:odd').css('backgroundColor','red')
	$('li:even').css('backgroundColor','blue')
})*/

/*import './css/index.css'
import 'bootstrap/dist/css/bootstrap.css'*/

import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import app from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// import { Header,Swipe, SwipeItem,Button } from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);

import MintUI from 'mint-ui'
Vue.use(MintUI)

import VueResource from 'vue-resource'
Vue.use(VueResource)
//定义ajax请求根路径
//Vue.http.options.root="/root"
Vue.http.options.emulateJSON=true

import moment from 'moment'
Vue.filter("dataFormat",function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){
	return moment(dataStr).format(pattern)
})

import router from './router.js'

var store = new Vuex.Store({
	state:{
		count:0
	},
	mutations:{
		//对state的数据进行处理，供组件统一调用
		add(){
			this.state.count++;
		}
	},
	getters:{
		//功能类似filter，computed
		optcount:function(state){
			return '这是get处理过的count：'+state.count
		}
	}
})

var vm = new Vue({
	el:"#app",
	data:{
		
	},
	render:c=>c(app),
	router,
	store,
})





















