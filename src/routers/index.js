import Vue from 'vue'
import Router from 'vue-router'
import movie from "./movie"
import cinema from "./cinema"
import mine from "./mine"
Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		movie, cinema, mine,
		{
			path: "/*",
			redirect: movie
		}
	]
})
