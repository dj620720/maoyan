import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import axios from "axios"
Vue.prototype.axios=axios;

//创建一个全局的过滤器
Vue.filter("setWH",(url,arg)=>{
	return url.replace(/w\.h/,arg);
});

//引入better-scroll
import Scroller from '@/components/Scroller';
Vue.component('Scroller',Scroller)

//引入css动画
import Loading from '@/components/Loading'
Vue.component("Loading",Loading)	


Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
