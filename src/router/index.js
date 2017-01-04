import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/home',
			name: 'home',
			component: () => System.import('../views/home.vue'),
			beforeEnter: (to, from, next)=>{
				next();
			}
		},
		{
			path: '/router',
			name: 'router',
			component: () => System.import('../views/routerDemos.vue')
		},
		{
			path: '/vuex/counter',
			name: 'vuex',
			component: () => System.import('../views/vuex-counter.vue') 
		},
		{
			path: '/vue-rx',
			name: 'vueRx',
			component: () => System.import('../views/vue-rx-demo.vue')
		},
		{
			path: '*',
			redirect: '/home'
		}
	]
})