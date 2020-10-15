import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import menu_items, { IMenuItems } from '/@/data/menu_items'
import Home from './page/home/index.vue'

const routes: Array<RouteRecordRaw> = []

menu_items.map((item: IMenuItems) => {
	routes.push({
		path: `/com/${item.path}`,
		component: Home
	})

	item.components.map((it) => {
		routes.push({
			path: `/com/${item.path}/${it.name}`,
			component: () => import(`/@/page/${item.path}/${it.name}/index.vue`)
		})
	})
})

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			redirect: '/com'
		},
		{
			path: '/com',
			component: Home
		},
		...routes
	]
})
